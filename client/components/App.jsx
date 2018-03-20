import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import History from './History'
import StartMeeting from './StartMeeting'
import PastMeeting from './PastMeeting'
import Dashboard from './Dashboard'
import Profile from './Profile'

const App = ({auth}) => (
  <Router>
    <div className="container has-text-centered">

      <div className="hero is-small is-primary">
        <div className="hero-body has-text-centered">
          <Link to='/' className="">
            <h1 className="title is-1">$how Me The Money</h1>
          </Link>
          <Nav />
        </div>
      </div>

      <div className=''>
        {!auth.isAuthenticated &&
          <Route exact path="/" component={Login} />
        }
        {auth.isAuthenticated &&
          <Route exact path='/' component={Dashboard} />
        }
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route path="/meeting" component={StartMeeting} />
        <Route path="/history" component={History} />
        <Route path="/history/:id" component={PastMeeting}/>
        <Route path="/profile" component={Profile} />
        <Route path="/profile/:id" component={Profile} />
      </div>

    </div>
  </Router>
)

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
