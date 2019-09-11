if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require('express')
const path = require('path')
const app = express()
const http = require('http').Server(app)
const bodyParser = require('body-parser')

const request = require('superagent')
const agent = request.agent()

app.use(bodyParser.json())

app.get('/api/payments', (req, res) => {
  let url = `https://api.venmo.com/v1/stories/target-or-actor/${process.env.VENMO_ID}?limit=50&access_token=${process.env.ACCESS_TOKEN}`
  agent.get(url).then(payments => {
    res.send(payments.body)
  }).catch(() => {
    res.send({ error: 'Technical difficulties while pulling payments.' })
  })
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

