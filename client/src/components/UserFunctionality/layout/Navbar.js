import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'
import logo from './logo.png';

const Navbar = (props) => {
  const { auth, profile } = props;
  // console.log(auth);
  const links = auth.uid ? <SignedInLinks profile={profile} />  : <SignedOutLinks /> ;

  return (
    <nav className="navigation">
      <div className="navigationContainer">
        <Link to='/' className="brand-logo"><img src={logo} /></Link>
        <Link to='/about' className="brand-logo">About</Link>
        <Link to='/dashboard' className="brand-logo">Workouts</Link>
        {auth.isLoaded && links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar)