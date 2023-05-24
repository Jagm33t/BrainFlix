
import { useState } from 'react';
import './App.scss';
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

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
<BrowserRouter>
<div>
  <Routes>
    <Route path='/' element={<Home activeVideo={activeVideo} handleVideoClick={handleVideoClick} videos={Videos} />}/>
    <Route path='upload' element={<Upload/>}/>
  </Routes>
</div>
</BrowserRouter>


{/* <Home activeVideo={activeVideo} handleVideoClick={handleVideoClick} videos={Videos} /> */}


    </>
  )


}
   
  


export default App;
