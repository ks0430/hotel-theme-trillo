import React, { Component } from "react";
import "./sass/main.scss";
import logo from "./img/logo.png";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <header className="header">
            <img src={logo} alt="logo" />
            <form className="search">
              <input
                type="text"
                className="search__input"
                placeholder="Search hotels"
              />
              <button className="search__button">Search Button</button>
            </form>
          </header>
          <div className="content">
            <nav className="sidebar">Navigation</nav>
            <main className="hotel-view">Main</main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
