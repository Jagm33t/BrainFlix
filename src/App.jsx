import { useState } from 'react';
import './App.scss';
import Navhead from './components/Navhead/Navhead';

import VideoList from './components/VideoList/VideoList';

import videoData from "./data/video-details.json";

import Header from "./components/Header/Header";

import Comment from './components/Comment/Comment';








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

<Header activeVideo={activeVideo}/>

<Comment activeVideo={activeVideo}/>

 
< VideoList videos={Videos} handleVideoClick={handleVideoClick} activeVideo={activeVideo}/>
    </>
  )


}
   
  


export default App;
