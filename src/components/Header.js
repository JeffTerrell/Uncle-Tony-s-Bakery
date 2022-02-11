import React from "react";
import ticketsImage from "./../img/tony.png";

function Header(){
  return (
    <React.Fragment>
      <div id="header">
        <h1>Uncle Tony's Bakery Who Is Definitely Not In The Mob</h1>
        <img src={ticketsImage} alt="Uncle Tony" />
      </div>
    </React.Fragment>
  );
}

export default Header;