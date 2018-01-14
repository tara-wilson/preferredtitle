import React, { Component } from 'react';
 
// App component - represents the whole app
export default class App extends Component {
 
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
        <h1>Welcome to Preferred Title & Escrow, Inc.</h1>
        The owners of Preferred Title & Escrow, Inc. have over 45 years in the title business. 
        We know how to work effectively with Realtors and lenders so that the settlements go smoothly. 
        We offer friendlier, more personalized service and we take the time to make the customer completely 
        comfortable prior to and during settlement.
      </div>
      <div className="row somepad" style={{backgroundColor: '#f2f2f2'}}>
        <div className="col-md-4">
          <span class="glyphicon glyphicon-briefcase" style={{fontSize: 66}}></span>
          <h2>My Home Approved</h2>
          <p>Preferred Title & Escrow, Inc. is approved by the My Home Program and many other 
          county and state programs which help to make homes affordable.</p>
          <p><a className="btn btn-secondary" href="https://www.princegeorgescountymd.gov/sites/RedevelopmentAuthority/Services/MyHome/Pages/default.aspx" role="button">My Home</a></p>
        </div>
        <div className="col-md-4">
          <span class="glyphicon glyphicon-lock" style={{fontSize: 66}}></span>
          <h2>What We Do</h2>
          <p>You have bought a property! What happens next?</p>
          <p><a className="btn btn-secondary" href="/whatwedo" role="button">Read More</a></p>
       </div>
        <div className="col-md-4">
          <span class="glyphicon glyphicon-globe" style={{fontSize: 66}}></span>
          <h2>About Us</h2>
          <p>Meet the people of Preferred Title. </p>
          <p><a className="btn btn-secondary" href="/about" role="button">About</a></p>
        </div>
      </div>
      <div className="row somepad">
        <div className="col-md-6">
          <img className="rowimage" src='downtown_bmore_1.jpg'></img>
          <h2>Get the Preferred Title App!</h2>
          <p>Generate your own Good Faith Estimates and Consumer Disclosure. Email us for access.</p>
          <p><a className="btn btn-secondary" href="https://www.titlecapture.com/app/30/preferredtitle" role="button">Our App</a></p>
        </div>
        <div className="col-md-6">
          <img className="rowimage" src='househeader.jpg'></img>
          <h2>Title Insurance</h2>
          <p>Title Insurance protects your biggest investment.</p>
          <p><a className="btn btn-secondary" href="http://fntic.com/whatistitle.aspx" role="button">What is Title Insurance?</a><a className="btn btn-secondary" href="http://estimator.fnf.com/default.aspx?brand=fntic" role="button">Title Rate Estimator</a></p>
       </div>
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