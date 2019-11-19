import React from 'react'
import ReactPageScroller from 'react-page-scroller'
import nam from './nam.jpg'
import './App.css'

const totalPrice = 4000

class App extends React.Component {
  state = {
    payments: [],
    page: 0,
    countdown: {},
    error: ''
  }

  componentWillMount = () => {
    this.startCountdown('Dec 7, 2019 22:00:00')
    fetch('/api/payments')
      .then(res => res.json())
      .then(res => {
        if (res.error) return this.setState({ error: res.error })
        this.setState({
          payments: res.data.filter(
            p =>
              p.payment &&
              p.payment.target.user.username === 'squishguin' &&
              p.payment.note.toLowerCase().indexOf('25yve') !== -1
          )
        })
      })
  }

  startCountdown = date => {
    let countDownDate = new Date(date).getTime()
    let x = setInterval(() => {
      getTime()
    }, 1000)

    let getTime = () => {
      // Get today's date and time
      let now = new Date().getTime()
      let distance = countDownDate - now
      let days = Math.floor(distance / (1000 * 60 * 60 * 24))
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((distance % (1000 * 60)) / 1000)

      // let text = `${days}d ${hours}h ${minutes}m ${seconds}s`
      let text = {
        days,
        hours,
        minutes,
        seconds
      }

      if (distance < 0) {
        clearInterval(x)
        text = 'You missed it'
      }
      this.setState({ countdown: text })
    }
    getTime()
  }

  getPage = () => {
    let { payments, page } = this.state
    let pages = []
    let newPage = page * 6
    for (let i = newPage; i < newPage + 5; i++) {
      if (payments[i]) {
        let payment = payments[i].payment
        let user = payment.actor
        pages.push(
          <div className='payment' key={i}>
            <img
              style={{
                width: 48,
                height: 48
              }}
              src={user.profile_picture_url}
            />
            <div className='payment-info'>
              {`${user.first_name} ${user.last_name}`}
            </div>
          </div>
        )
      }
    }
    return pages
  }

  getGoals = total => {
    let marks = [
      {
        amount: 100,
        icon: 'https://static.thenounproject.com/png/30287-200.png',
        title: 'Late Nyte'
      },
      {
        amount: 200,
        icon: 'https://static.thenounproject.com/png/86908-200.png',
        title: 'Pyñata'
      },
      {
        amount: 400,
        icon: 'https://static.thenounproject.com/png/1590652-200.png',
        title: 'Fyte Night'
      },
      {
        amount: 400,
        icon: 'https://static.thenounproject.com/png/1092336-200.png',
        title: 'Lytes Sound'
      },

      {
        amount: 800,
        icon: 'https://static.thenounproject.com/png/1792741-200.png',
        title: 'Lyquor'
      },
      {
        amount: 1300,
        icon: 'https://static.thenounproject.com/png/79187-200.png',
        title: 'Venue'
      }
    ]

    let goals = []
    let currTotal = 300
    let colorTotal = 0
    marks.forEach(goal => {
      colorTotal += goal.amount
      goals.push(
        <div
          className='goal-mark'
          style={{
            bottom: (currTotal / totalPrice) * 100 + '%'
          }}
        >
          <img className='goal-icon' src={goal.icon} />
          <div className='goal-mark-title'>
            {goal.title}
            <div
              className='goal-amount'
              style={{
                color: total > colorTotal ? '#34ca96' : 'black'
              }}
            >
              ${goal.amount}
            </div>
          </div>
        </div>
      )
      currTotal += 600
    })
    return goals
  }

  render = () => {
    let { countdown, payments, page, error } = this.state
    let { days, hours, minutes, seconds } = countdown

    let total = 0
    payments.forEach(p => (total += p.payment.amount))

    return (
      <div className='App'>
        <ReactPageScroller
          ref={c => (this._pageScroller = c)}
          pageOnChange={this.pageOnChange}
        >
          <div className='section'>
            <div className='header-container'>
              <div className='title'>25YVE</div>
              <div className='countdown'>
                <div className='time-container'>
                  <div className='time-value'>{('0' + days).slice(-2)}</div>
                  <div className='time-unit'>DAYS</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + hours).slice(-2)}</div>
                  <div className='time-unit'>HOURS</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + minutes).slice(-2)}</div>
                  <div className='time-unit'>MINUTES</div>
                </div>
                <div className='time-container'>
                  <div className='time-value'>{('0' + seconds).slice(-2)}</div>
                  <div className='time-unit'>SECONDS</div>
                </div>
              </div>
              <div
                style={{
                  color: 'white',
                  position: 'absolute',
                  width: 320,
                  textAlign: 'center',
                  bottom: 100
                }}
              >
                ↓ help
              </div>
            </div>
          </div>
          <div className='section'>
            <div className='payments-center'>
              <div className='payments'>
                <div style={{ color: 'white' }}>FUNDING</div>
                <div className='goal-title'>Daniel's 25th Birthday</div>
                <div className='goal-subtitle'>
                  All the goals will definitely be there!
                  <br />
                  But if you want to help cover cost you'd be a real one.
                  <br />
                  Venmo <b>@squishguin</b> with the note "25YVE" to donate
                </div>
                {error && <div className='payments-title'>{error}</div>}
                {!error && (
                  <div className='payments-title'>
                    {payments.length} Real Ones
                  </div>
                )}
                <div style={{ height: 290 }}>{this.getPage()}</div>
                {!error && (
                  <div className='btn-bar'>
                    <button
                      className='page-btn'
                      disabled={page === 0}
                      onClick={() => {
                        if (page > 0) this.setState({ page: page - 1 })
                      }}
                    >
                      {'<'}
                    </button>
                    {page + 1}
                    <button
                      className='page-btn'
                      disabled={page + 1 > payments.length / 6}
                      onClick={() => {
                        this.setState({ page: page + 1 })
                      }}
                    >
                      >
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div
              style={{
                color: 'white',
                position: 'absolute',
                width: 320,
                textAlign: 'center',
                bottom: 20
              }}
            >
              ↓ goals
            </div>
          </div>
          <div className='section'>
            <div className='goal'>
              <div className='progress-bar'>
                <div
                  className='progress-bar-inner'
                  style={{
                    height:
                      ((total >= totalPrice ? totalPrice : total) /
                        totalPrice) *
                        100 +
                      '%'
                  }}
                ></div>
              </div>
              <div className='marks'>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ color: 'white' }}>Total Raised</div>
                  <div className='goal-total'>${total.toLocaleString()}</div>
                </div>
                {this.getGoals(total)}
              </div>
            </div>
            <div
              style={{
                color: 'white',
                position: 'absolute',
                width: 320,
                textAlign: 'center',
                bottom: 20
              }}
            >
              ↓ bottles
            </div>
          </div>
          <div className='section'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row'
              }}
            >
              <div className='bottles-des'>
                <div className='goal-title'>Tables</div>
                <div className='goal-subtitle'>
                  There will be a limited amount of tables available. Buying a
                  table is just paying for 2 handles! You'll get bottle service,
                  bottle girls (or guys whatever you want), a sign with your
                  name on it, a DJ shoutout, and your own sitting area. Please
                  message me about table details.
                </div>
                <div className='handle-title'>Handle List</div>
                <div className='goal-subtitle'>
                  Handles will be the same price as they are at the liquor
                  store. If you'd like to buy a bottle not on this list please
                  message me.
                </div>
                <div>
                  <table>
                    <tbody>
                      {[
                        { name: 'Jameson', price: 60 },
                        { name: 'Ketel One', price: 60 },
                        { name: 'Ciroc (Any flavor)', price: 60 },
                        { name: 'Patron', price: 100 }
                      ].map(bottle => {
                        return (
                          <tr
                            style={{
                              color: 'white'
                            }}
                          >
                            <td
                              style={{
                                fontWeight: 'bold'
                              }}
                            >
                              {bottle.name}
                            </td>
                            <td>${bottle.price.toLocaleString()}</td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div
              style={{
                color: 'white',
                position: 'absolute',
                width: 320,
                textAlign: 'center',
                bottom: 20
              }}
            >
              ↓ details
            </div>
          </div>
          <div className='section'>
            <div
              className='bottles-des'
              style={{
                width: '100%'
              }}
            >
              <div className='goal-title'>Details</div>
              <div className='goal-subtitle'>
                December 7th, 2019 @ 10 PM to 2 AM
                <br />
                Dress Code: <b>ORANGE</b>
              </div>
              <div
                style={{
                  position: 'relative',
                  textAlign: 'right',
                  height: 500,
                  width: '100%'
                }}
              >
                <div
                  style={{
                    overflow: 'hidden',
                    background: 'none!important',
                    height: 500,
                    width: '100%'
                  }}
                >
                  <iframe
                    width='100%'
                    height='500'
                    id='gmap_canvas'
                    src='https://maps.google.com/maps?q=330%20Pennsylvania%20Ave%20SE%2C%20Washington%2C%20DC%2020003&t=&z=13&ie=UTF8&iwloc=&output=embed'
                    frameborder='0'
                    scrolling='no'
                    marginheight='0'
                    marginwidth='0'
                  ></iframe>
                  <a href='https://www.embedgooglemap.net/blog/best-wordpress-themes/'></a>
                </div>
              </div>
            </div>
            <div
              style={{
                color: 'white',
                position: 'absolute',
                width: 320,
                textAlign: 'center',
                bottom: 20
              }}
            >
              ↓ entertainment
            </div>
          </div>
          <div className='section'>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                alignItems: 'center',
                maxWidth: 600
              }}
            >
              <div
                className='goal-title'
                style={{
                  width: '100%',
                  textAlign: 'left'
                }}
              >
                DJ Knom
              </div>
              <div
                style={{
                  marginTop: 20,
                  width: '100%',
                  height: 500,
                  backgroundImage: `url(${nam})`,
                  backgroundSize: 'cover'
                }}
              ></div>
            </div>
          </div>
        </ReactPageScroller>
      </div>
    )
  }
}

export default App
