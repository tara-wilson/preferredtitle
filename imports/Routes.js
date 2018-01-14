import React from 'react'
import ReactDom from 'react-dom';
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import {render} from 'react-dom';
import App from './App'
import Contact from './Contact'
import WhatWeDo from './Whatwedo'
import About from './About'


const history = createBrowserHistory()


Meteor.startup(() => {
	render(
		<Router history={history}>
		<div>
					<Route exact path='/' component={App} />
					<Route path='/contact' component={Contact} />
					<Route path='/about' component={About} />
					<Route path='/whatwedo' component={WhatWeDo} />
					</div>
		</Router>,
		document.getElementById('render-target')
	);
});