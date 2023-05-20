import "./Navhead.scss";
import Logo from "../../assets/Logo/BrainFlix-logo.svg"
import NavImg from "../../assets/Images/Mohan-muruge.jpg"
import SearchIcon from "../../assets/Icons/search.svg"




function Navhead(){
  return (
    <div className="navhead">
      <img className="navhead-logo" src={Logo}alt="Logo" />
      <div className="navhead-allarea">
      <div className="navhead-searcharea">
      <img className="navhead-searchicon" src={SearchIcon} alt="search" />
      <input className="navhead-input" type="text" name="name" placeholder="Search"/>
      </div>
      <img className="navhead-image" src={NavImg} alt="NavImage"/>
      </div>
      <button className="navhead-uplbtn">UPLOAD</button>
      <img className="navhead-image1" src={NavImg} alt="NavImage"/>
    </div>
  );
}





export default Navhead