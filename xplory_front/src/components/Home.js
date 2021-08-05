import React from "react";
import Home from './Home';
import Filter from './Filter';
import About from './About';
import LoginForm from './LoginForm';
import { Button } from "reactstrap";
import Maps from './Maps'

export default function Home(props) {
	return (
<<<<<<< HEAD
		<div>
			<h1>Xplory</h1>

			<Button onClick={()=>props.history.push('login')} color='primary'>
				Login
			</Button>
=======
	
		// 	{/* <Button onClick={()=>props.history.push('login')} color='primary'>
		// 		Hello Team
		// 	</Button> */}
	// <Home/>
	// <Filter/>
	// <About/>
	// <LoginForm/>
>>>>>>> c3470e6d24a35cbc96ad7660d9e83da3ff15e5c2
			<Maps/>
		
	);
}

