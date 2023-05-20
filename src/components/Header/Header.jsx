import "./Header.scss";
import Views from "../../assets/Icons/views.svg"
import Likes from "../../assets/Icons/likes.svg"


function Header (props){
  return(
   <>
   <video className="hero-image" controls poster={props.activeVideo.image} alt="activeVideo"></video>
    
    <div className="main-partfirst">
    <div className="main-content">
  
    <div className="main-details"> 
     <h1 className="main-head" >{props.activeVideo.title}</h1>
     </div>
    <div className="main-viewsection">

    <div className="main-author">    
   <p className="main-author--name">By {props.activeVideo.channel}</p>
  <p className="main-autor--date">{new Date(props.activeVideo.timestamp).toLocaleDateString()}</p>
    </div>

<div className="main-viewlike">
  <p className="main-view"><span><img src={Views} /></span>{props.activeVideo.views}</p>
  <p className="main-like"><span><img src={Likes} /></span>{props.activeVideo.likes}</p>
  </div>

    </div>

  <div className="main-brief" >
   <p>{props.activeVideo.description}</p>
    </div>

 </div>
</div>

</>   
      
  )
  
}

export default Header 