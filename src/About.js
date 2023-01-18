import { Link } from "react-router-dom";


function About(){

	return(
		<>
			<center>
				<h1> About Perfect Telecom Solutions </h1>

				<h1>
					<p> Address : </p>
					<p> D/8, Someshwar Soc, Hanuman Tekdi, Manisha Nagar, Gate No 2, Kalwa, Thane-400605</p>
					<p> Contact : </p>
					<p> 9773148489 , 9820459044 </p>
					<p> Contact on break down </p>
				</h1>
				<Link to ="/quotation">Want Quotation of any machine, click here</Link>
			</center>
		</>


	);
}
export default About;