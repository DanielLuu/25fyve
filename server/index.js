if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')

const request = require('superagent')
const agent = request.agent()

app.use(bodyParser.json())

getApiToken = () => {
  return agent
    .post('https://venmo.com/login')
    .send({
      csrftoken2: 'gMvnR2sKVIsVU5Jz3CyA3lMp2vVUityb',
      return_json: true,
      password: process.env.VENMO_PASS,
      phoneEmailUsername: 'squishguin'
    })
    .set(
      'Cookie',
      'v_id=fp01-0908ba2f-2fc9-440b-8027-e7c82179f2e3; csrftoken2=gMvnR2sKVIsVU5Jz3CyA3lMp2vVUityb; fbm_180347063770=base_domain=.venmo.com'
    )
    .then(loginInfo => {
      return loginInfo.body.access_token
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

app.get('/api/token', (req, res) => {
  getApiToken().then(token => {
    res.send({ token })
  })
})

let venmoToken = process.env.ACCESS_TOKEN || ''

app.get('/api/payments', (req, res) => {
  let url = `https://api.venmo.com/v1/stories/target-or-actor/${process.env.VENMO_ID}?limit=100&access_token=${venmoToken}`
  let data = []
  let triedToGetToken = false

  let fetchData = i => {
    if (i < parseInt(process.env.VENMO_PAGES)) {
      console.log('URL ' + i, url)
      agent
        .get(url)
        .then(payments => {
          data = data.concat(payments.body.data)
          url = payments.body.pagination.next + `&access_token=${venmoToken}`
          fetchData(i + 1)
        })
        .catch(err => {
          console.log('UNAUTHORIZED')
          if (!triedToGetToken) {
            console.log('GET TOKEN')
            triedToGetToken = true
            getApiToken().then(token => {
              venmoToken = token
              console.log('TOKEN', venmoToken)
              url = `https://api.venmo.com/v1/stories/target-or-actor/${process.env.VENMO_ID}?limit=100&access_token=${venmoToken}`
              console.log(url)
              fetchData(0)
            })
          } else {
            res.send({ error: 'Technical difficulties getting payments...' })
          }
        })
    } else {
      if (data.length > 0) {
        res.send({ data })
      } else {
        res.send({ error: 'Technical difficulties getting payments...' })
      }
    }
  }

  fetchData(0)
})

app.use(express.static(path.resolve(__dirname, '..', 'build')))
// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'))
})

const PORT = process.env.PORT || 9000
http.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`)
})
