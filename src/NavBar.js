import { Link } from "react-router-dom";

function NavBar(){

	return(
		<>
			<center>
				<div className="nav">
					<Link to ="/">Home</Link>
					<Link to ="/service">Laptop</Link>
					<Link to ="/printer">Printer</Link>
					<Link to ="/quotation">Quotation</Link>
					<Link to ="/about">About Us</Link>


				</div>
			</center>
		</>



	);
}
export default NavBar;