// import { useState } from 'react';
import "./Home.scss";

// import videoData from "../../data/video-details.json";
// import Navhead from '../../components/Navhead';
import Hero from "../../components/Hero/Hero"
import Header from "../../components/Header/Header";
import Comment from '../../components/Comment/Comment';
import VideoList from '../../components/VideoList/VideoList';


function Home (props){

  

  return(
    <>
   {/* Creating new divs to style for desktop view */}
 <div className="main-image">
{/* Active image section */}
<Hero activeVideo={props.activeVideo}/>
 </div>
<div className="details-content">
  <div className="details-contentview">
{/* ActiveVideo details section */}  
 <Header activeVideo={props.activeVideo}/>
{/* Comment section */}
<Comment activeVideo={props.activeVideo}/>
  </div>
 {/* Videolist Section */}
< VideoList videos={props.videos} handleVideoClick={props.handleVideoClick} activeVideo={props.activeVideo}/>

</div>
    </>
  )
}

export default Home;