import React, { Component } from 'react';
 
// App component - represents the whole app
export default class WhatWeDo extends Component {
 
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
      <div className="row lesspad" >
        <h1>What We Do</h1>
        <p>When you purchase residential real estate, you as the buyer have the right to choose where you settle.  You can designate your choice of settlement company right on your contract.  Preferred Title &amp; Escrow, Inc. invites you to settle with us.  Here’s why:</p>
        <p style={{textAlign: 'left', paddingTop: 20}}>
        <ul>
          <li>Our fee includes:  conducting the settlement, title examination and preparation of the Deed, Note and Deed of Trust if required.  Our fees are very competitive and are often lower than attorneys.</li>
          <li>Friendly, knowledgeable staff available to answer your questions both before and after settlement.</li> 
          <li>All settlements conducted by experienced professionals who will thoroughly explain all documents to you at settlement</li>  
          <li>Our office utilizes the latest computerized settlement systems</li> 
          <li>Our staff works closely with your real estate agent and your lender to assure a smooth, trouble free settlement</li>  
          <li>We are able to handle your Residential and Commercial needs</li>  
          <li>Settlements for properties throughout Maryland and the District of Columbia</li>  
          <li>Rush settlements available</li> 
          <li>Free parking</li>   
      </ul>       
      </p>
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