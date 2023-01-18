import home from "./Picture1.jpg";
import { Link } from "react-router-dom";

function Home(){

	return(
		<>
			<center>
				<img src={home}/><br/>
				<Link to ="/quotation">Want Quotation of any machine, click here</Link>
			</center>
		</>


	);
}
export default Home;