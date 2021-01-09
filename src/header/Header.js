import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__block">
          <h1 className="header__block-title">Code challenge</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
        </div>
      </header>
    );
  }
}

export { Header }
