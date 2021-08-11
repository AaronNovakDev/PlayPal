import React, { useReducer } from "react"
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import NotFound from "./NotFound"
import Navigation from "./Navigation"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import ParkForm from "./ParkForm"
import Parks from "./Parks"
import Park from "./Park"
import Filter from "./Filter"
import Friends from "./Friends"
import reducer from '../utils/reducer'
import { StateContext } from '../utils/stateContext'
import { getParks } from '../assets/services/parkServices'
import './style/main.scss'



const App = () => {
	const initialstate ={
		parkList: [],
		loggedInUser: sessionStorage.getItem("username") || null, 
		auth: {token: sessionStorage.getItem("token") || null}
	  }
	  const [store, dispatch] = useReducer(reducer, initialstate )
 	  const {parkList} = store

	//   useEffect(() => {
	// 	getParks()
	// 	.then((Parks) =>{
	// 	  dispatch({
	// 		type: "setParkList",
	// 		data: Parks
	// 	})
	// })
	// 	.catch(error => console.log(error))
	// },[]
	// )
  
	function getParks(id){
		return parkList.find(m=> m.id === parseInt(id))
	  }

	return (
		// <header>
			<header classname="top-nav">
			
        <StateContext.Provider value={{store, dispatch}}>	  	
		<BrowserRouter>
        <Navigation/>
        <Switch>
		<div id ="nav-links">
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
		</div>
		</Switch>
        </BrowserRouter>
      </StateContext.Provider>    
	  </header>
    // </header>
	);
};

export default App;
