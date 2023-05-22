
import { useState } from 'react';
import './App.scss';



// Importing Data for display
import videoData from "./data/video-details.json";

// Importing different components jsx files

import Navhead from './components/Navhead/Navhead';
import Hero from "./components/Hero/Hero"
import Header from "./components/Header/Header";
import Comment from './components/Comment/Comment';
import VideoList from './components/VideoList/VideoList';





function App() {

 //setting data from json file to Videos using state
  const [Videos, setVideos] = useState(videoData);

 
  const [ activeVideo, setActiveVideo ] = useState(Videos[0]); 


  
//Setting a click function 
 const handleVideoClick = (id) => {
  console.log(id);
  const foundVideo = Videos.find((Video) => Video.id === id);
  console.log("found video :" ,foundVideo);



// CLicked video setting to be a active one for display
  setActiveVideo(foundVideo);


}


  return (
    <>


 <Navhead/>


{/* Creating new divs to style for desktop view */}

 <div className="main-image">

{/* Active image section */}
<Hero activeVideo={activeVideo}/>

 </div>
<div className="details-content">
  <div className="details-contentview">

{/* ActiveVideo details section */}
    
 <Header activeVideo={activeVideo}/>

{/* Comment section */}
<Comment activeVideo={activeVideo}/>


  </div>


 {/* Videolist Section */}
< VideoList videos={Videos} handleVideoClick={handleVideoClick} activeVideo={activeVideo}/>

</div>
    </>
  )


}
   
  


export default App;
