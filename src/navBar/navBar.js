import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showDropDown, hideDropDown, logOut } from './actions'

import '../stylesheets/navbar.css'

class NavBar extends React.Component {
  render(){
    return(
      <div className="navBar">
        <Link to="/" className="navLink home"><i className="fas fa-home"></i> Home</Link>
        <Link to="/" className="navLink menu"><i className="fas fa-bars"></i> Menu</Link>
      </div>
    );
  }
}

// Once login is extabished, the userData state needs to be mapped to props
export const mapStateToProps = (state) => {
  return {
    navBarState: state.navBarState
  }
}

export default connect(mapStateToProps, {showDropDown, hideDropDown, logOut })(NavBar)
