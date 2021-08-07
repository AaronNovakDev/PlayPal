import React, { useState } from "react"
import About from "./About"
import Filter from "./Filter"
import Friends from "./Friends"
import LoginForm from "./LoginForm"
import Navigation from "./Navigation"
import NotFound from "./NotFound"
import ParkForm from "./ParkForm"
import Park from "./Park"

import Parks from "./Parks"
import SignupForm from "./SignupForm"
import { Button } from "reactstrap";
import Maps from './Maps'


// routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home"
import Login from "./LoginForm"

const App = () => {


	return (
		
		<Router>
		<Switch>
		<Route exact path='/Home' component={Home} />
		<Route exact path='/Navigation' component={Navigation} />
		<Route exact path='/Filter' component={Filter} />
		<Route exact path='/About' component={About} />
		<Route exact path='/LoginForm' component={LoginForm} />
		<Route exact path='/Friends' component={Friends} />
		<Route exact path='/ParkForm' component={ParkForm} />
		<Route exact path='/Park' component={Park} />
		<Route exact path='/Parks' component={Parks} />
		<Route exact path='/NotFound' component={NotFound} />
		<Route exact path='/Signup' component={SignupForm} />
		</Switch>
		</Router>
		
	);
};

export default App;
