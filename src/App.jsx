
import { useState } from 'react';
import './App.scss';
import ReactDOM from "react-dom";
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload'

// Importing Data for display
import videoData from "./data/video-details.json";

// Importing different components jsx files
import Video from './components/Video/Video';
import Navhead from './components/Navhead/Navhead';
import Hero from "./components/Hero/Hero"
import Header from "./components/Header/Header";
import Comment from './components/Comment/Comment';
import VideoList from './components/VideoList/VideoList';
// import {Navigate} from "react-router-dom"





function App() {



  return (
    <>

<BrowserRouter>
<div>
 <Navhead/>

  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/home' element={ <Navigate to="/" /> }/>
    <Route path="/video/:videoId" element={<Home />} />
    <Route path='upload' element={<Upload/>}/>
  </Routes>
</div>

</BrowserRouter>


    </>
  )


}
   
  


export default App;
