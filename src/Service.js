import laptop from "./Laptop.jpg";
import { Link } from "react-router-dom";


function Service(){

	return(
		<>
			<center>
				<img src={laptop}/><br/>
				<Link to ="/quotation">Want Quotation of any machine, click here</Link>
			</center>
		</>


	);
}
export default Service;