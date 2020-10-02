import React from "react";

class Navbar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="Navbar">
        <div className="logo"></div>
        <div className="navigation">
          <ul>
            <li>a</li>
            <li>b</li>
            <li>c</li>
            <li>d</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
