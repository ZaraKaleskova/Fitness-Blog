  
import React, { Profiler } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">Hey {props.profile.firstName}</NavLink></li>
        <li><NavLink to='/create'>New Training</NavLink></li>
        <li><NavLink to='/articles'>Articles</NavLink></li>
        <li><NavLink to='/chat'>Chat</NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)