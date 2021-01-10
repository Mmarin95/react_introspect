import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__block">
          <h1 className="header__block-title">Code challenge</h1>
          <p className="header__block-intro">Itaque facere fugiat eum. Tempora eum molestiae voluptas consequatur aut corporis quia. Recusandae aut.</p>
        </div>
      </header>
    );
  }
}

export { Header }
