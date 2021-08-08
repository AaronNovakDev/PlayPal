	import React from "react";
	import { Button } from "reactstrap";
	import Maps from './Maps'

<<<<<<< HEAD
	export default function Home(props) {
		return (
			<div>
				<h1>Xplory</h1>

				<Button onClick={()=>props.history.push('LoginForm')} color='primary'>
					Login
				</Button>
				<Maps/>
			</div>
		);
	}
=======
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
>>>>>>> origin/not-sure

