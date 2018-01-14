import React, { Component } from 'react';
 
// App component - represents the whole app
export default class Contact extends Component {
 
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <nav className="navbar navbar-inverse navbar-fixed-top" style={{backgroundColor: '#8c1a0b'}}>
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li><a style={{color: 'white'}} href="/">HOME</a></li>
                <li><a style={{color: 'white'}} href="https://www.titlecapture.com/app/30/preferredtitle">GET A TITLE QUOTE</a></li>
                <li><a style={{color: 'white'}} href="https://www.titlecapture.com/app/30/preferredtitle">FOR LENDERS</a></li>
                <li><a style={{color: 'white'}} href="/contact">CONTACT US</a></li>
              </ul>
            </div>
          </div>
        </nav>


    <div className="jumbotron">
        <img className="centerLogo" src='logo.jpg'></img>
    </div>

    <div className="container">
      <div className="row somepad">
        <h1>Contact Us</h1>
        <p>Phone: 301-513-9090</p>
        <p>Fax: 301-513-0404</p>
        <p>Email: PreferredTitle@aol.com</p>
        <p>Address: 7701 Greenbelt Rd, Suite 513, Greenbelt MD 20770</p>
      </div>



      <footer style={{backgroundColor: 'black', color: 'white'}}>
        <h2>Get in touch</h2>
        <h3>We'd love to speak with you today</h3>
        <p>(301) 513-9090</p>
        <p>Preferredtitle@aol.com</p>
        <p>&copy; Company 2017</p>
      </footer>
    </div>
    </div>
    );
  }
}