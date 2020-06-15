import React from 'react';
import { Link } from 'react-router-dom'

const DropDown = (props) => {

  // Create a render methor for each link
  // Where appicable add a ternary operatory to check permission level

  const renderTestLink1 = () => {
    return <div className="dropDownOption"><Link className="navLinks">test link 1</Link><hr/></div>
  }

  const renderTestLink2 = () => {
    return <div className="dropDownOption"><Link className="navLinks">test link 2</Link><hr/></div>
  }

  // create a methor to render pre-login links i.e. login & create account

  // create a method to render post login links

  const renderTestLinks = () => {
    return(
      <React.Fragment>
        {renderTestLink1()}
        {renderTestLink2()}
      </React.Fragment>
    );
  }

  // create a method to check login status and render either of the above methods

  return(
    <div>
      {renderTestLinks()}
    </div>
  );
}

export default DropDown
