import { useState } from 'react';
import './App.scss';
import Navhead from './components/Navhead/Navhead';



import videoData from "./data/video-details.json";

import Hero from "./components/Hero/Hero"

import Header from "./components/Header/Header";

import Comment from './components/Comment/Comment';


import VideoList from './components/VideoList/VideoList';





function App() {

 
  const [Videos, setVideos] = useState(videoData);
  console.log(videoData);

  const [ activeVideo, setActiveVideo ] = useState(Videos[0]); 

console.log("activeVideo.comments: ", activeVideo.comments);
  

const handleVideoClick = (id) => {
  console.log(id);
  const foundVideo = Videos.find((Video) => Video.id === id);
  console.log("found video :" ,foundVideo);




  setActiveVideo(foundVideo);


}


  return (
    <>

 <Navhead/>

 <div className="main-image">

<Hero activeVideo={activeVideo}/>

 </div>
<div className="details-content">
  <div className="details-contentview">


    
 <Header activeVideo={activeVideo}/>

<Comment activeVideo={activeVideo}/>


  </div>


 
< VideoList videos={Videos} handleVideoClick={handleVideoClick} activeVideo={activeVideo}/>

</div>
    </>
  )


}
   
  


export default App;
