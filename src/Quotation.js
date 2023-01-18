import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser";
import ReactGA from "react-ga";

function Quotation(){

	useEffect(() =>{
		ReactGA.pageview(window.location.pathname);
	},[]);

	const[name, setName] = useState("");
	const[email, setEmail] =  useState("");
	const[phone, setPhone] = useState("");
	const[desc, setDesc] = useState("");
	const[ans, setAns] = useState("");


	const hName = (event) => { setName(event.target.value);}
	const hEmail = (event) => { setEmail(event.target.value);}
	const hPhone = (event) => { setPhone(event.target.value);}
	const hDesc = (event) => { setDesc(event.target.value);}

	const response = (event) =>{
			event.preventDefault();
			let data ={"from_name":name, "from_email":email, "from_phone":phone, "message":desc};
			emailjs.send("service_bg23q67","template_1bfcqy5",data,"gvld1Q7NBdI0OhFbL")
			.then(res=>setAns("We will call in 2 hrs"))
			.catch(err=>console.log(err));
			ReactGA.event({
				category: name,
				action:"test action",
				label:"test label",
				value: desc,
			});
	}

	return(
		<>
			<center>
				<h1> If need quotation for any particular Printer, Laptop, Desktop, Telecom System then fill the form</h1>

				<form onSubmit={ response }>
					<input type="text" placeholder="Enter your name" onChange={hName} />	
					<br/><br/>
					<input type="email" placeholder="Enter your EmailId" onChange={hEmail} />	
					<br/><br/>
					<input type="number" placeholder="Enter your phone number" onChange={hPhone} />	
					<br/><br/>
					<textarea placeholder="Enter product details you want" rows={5} cols={40} onChange={hDesc} />
					<br/><br/>
					<input type="submit" />
				</form>
				<h1> {ans} </h1>
			</center>	
		</>
					
	);
}
export default Quotation;