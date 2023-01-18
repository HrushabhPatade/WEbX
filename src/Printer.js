import printer from "./Printer.jpg";
import { Link } from "react-router-dom";


function Printer(){

	return(
		<>
			<center>
				<img src={printer}/><br/>
				<Link to ="/quotation">Want Quotation of any machine, click here</Link>
			</center>
		</>


	);
}
export default Printer;