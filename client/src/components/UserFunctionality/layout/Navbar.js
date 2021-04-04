import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Strength And Aesthetics</Link>
        <SignedInLinks />
        <SignedOutLinks />
            <h2>Hello</h2>
      </div>
    </nav>
  )
}

export default Navbar;