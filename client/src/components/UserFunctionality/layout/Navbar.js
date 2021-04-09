import React, { Profiler } from 'react'
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
        <Link to='/' className="navlogo"><img src={logo} /></Link>
       
       
        <Link to='/about' >About</Link>

        <Link to='/dashboard' >Workouts</Link>

         
        
        {auth.isLoaded && links}
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => {
  // console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(Navbar)