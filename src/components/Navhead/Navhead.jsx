import "./Navhead.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg";
import NavImg from "../../assets/Images/Mohan-muruge.jpg";
import SearchIcon from "../../assets/Icons/search.svg";
import { Link } from 'react-router-dom';
// import ReactDOM from "react-dom";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';



function Navhead(){
  return (
    
    <div className="navhead">
      <Link to="/" className="navhead-logo-link"> <img className="navhead-logo" src={Logo}alt="Logo" /></Link>
      <div className="navhead-allarea">
      <div className="navhead-searcharea">
      <img className="navhead-searchicon" src={SearchIcon} alt="search" />
      <input className="navhead-input" type="text" name="name" placeholder="Search"/>
      </div>
      <img className="navhead-image" src={NavImg} alt="NavImage"/>
      </div>
      <Link to="Upload" className="navhead-uplbtn-link"><button className="navhead-uplbtn">UPLOAD</button></Link>
      <img className="navhead-image1" src={NavImg} alt="NavImage"/>
    </div>
  );
}





export default Navhead;