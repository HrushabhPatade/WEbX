import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import Service from "./Service";
import Printer from "./Printer";
import Quotation from "./Quotation";
import About from "./About";
import NavBar from "./NavBar";
import ReactGA from "react-ga";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const TRACKING_ID = "UA-211252680-1";
ReactGA.initialize(TRACKING_ID);


function App() {
  return (
    <div className="App">
     <BrowserRouter>
		<NavBar/>
		<Routes>
			<Route path="/" element ={<Home/>} />
			<Route path="/printer" element={<Printer/>}/>
			<Route path="/service" element={<Service/>}/>
			<Route path="/quotation" element={<Quotation/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="*" element={<Navigate to ="/"/>}/>
		</Routes>
	</BrowserRouter>	
    </div>
  );
}

export default App;
