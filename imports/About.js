import React, { Component } from 'react';
 
// App component - represents the whole app
export default class About extends Component {
 
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
        <h1>About Us</h1>
        <p>Preferred Title & Escrow, Inc. is a corporation organized and existing under the laws of the State of Maryland. The principals formed a title company in March 1990, which was named Phoenix Settlement Services. Unfortunately this name was similar to the name of a real estate investment company in the area. In order to avoid confusion, the name was changed, and in October of 1992, Preferred Title & Escrow, Inc. became a corporation, the principals of the company have not changed since the formation in 1990.</p>
        <div style={{textAlign: 'left', paddingTop: 20}}>
        <h3>The Principals</h3> 
        <div>
        <h2>MARGARET E. LAW</h2>
        <p>President, Preferred Title & Escrow, Inc. BA University of Maryland, College Park Certified Paralegal, University of Maryland, University College, 1976 </p>  
        <p>Ms. Law has been a manager/owner in the real estate industry since 1972. She started by opening a title company division for an attorney which was great success and has been working in the real estate ever since. She has handled all aspects of the settlement business from typing documents to solving complex title problems. As Pre Settlement Manager and owner of Preferred Title & Escrow, Inc., Ms. Law takes a very hands on approach and is very active in resolving title problems and in insuring that clients get what they need in a timely manner.</p>  
        </div>
        <div>
        <h2>KATHI REDFORD</h2>
        <p>Vice President, Preferred Title & Escrow, Inc. BA University of Maryland 1987</p>  
        <p>Ms. Redford has been working in the real estate field since 1983. She worked her way through college working real estate settlement attorney’s officer and was manager of the office before she graduated. She has handled all aspects of real estate settlements and specializes in the closing of transactions and the follow up work. As post closing manager she reviews all transactions, which close at Preferred Title to ensure that everything is recorded properly and that the title insurance is issued as soon as possible.</p>  
        </div>
        <h3>Attourneys On Staff</h3> 
        <div>
        <h2>ROBERT H. LAW, ESQUIRE </h2> 
        <p>BA University of West Virginia, 1956 JD American University, 1961 Admitted to Maryland Bar, June 1962</p>  
        <p>Mr. Law is an attorney who has been practicing in Maryland since 1962. He is the Senior Member of his Law Firm. He has handled all aspects of the law including real estate contract law. He has worked both with residential and commercial real estate and has handled real estate settlements over several decades. His practice consists mainly of real estate, corporate law and business law.</p>  
        </div>   
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