// import { useState } from 'react';
import "./Home.scss";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import videoData from "../../data/video-details.json";
// import Navhead from '../../components/Navhead';
import Hero from "../../components/Hero/Hero"
import Header from "../../components/Header/Header";
import Comment from '../../components/Comment/Comment';
import VideoList from '../../components/VideoList/VideoList';



function Home (){

  //setting data from json file to Videos using state
  const [Videos, setVideos] = useState([]);

  const [ activeVideo, setActiveVideo ] = useState({}); 

  const params = useParams();
  console.log("params: ",params.videoId)

 

  useEffect(() => {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=2674a343-d3a8-4521-a489-4042f7462147")
      .then((response) => {
        console.log("REsPonse",response);
        setVideos(response.data);
    
      });
  }, []);

  useEffect(() => {
    if (params.videoId){
      axios
      .get(`https://project-2-api.herokuapp.com/videos/${params.videoId}/?api_key=2674a343-d3a8-4521-a489-4042f7462147`)
      .then((response) => {
        console.log("paramssssss",response);
        setActiveVideo(response.data);
      })
    }else{
      axios
      .get(`https://project-2-api.herokuapp.com/videos/random?api_key=2674a343-d3a8-4521-a489-4042f7462147`)
      .then ((response) => {
        setActiveVideo(response.data);
       
      })
      .catch((err)=> console.log("ERROORRRdRR",err));
    }
   
  }, [params.videoId]);
    
// //Setting a click function 
//  const handleVideoClick = (id) => {
//   // console.log(id);
//   const foundVideo = Videos.find((Video) => Video.id === id);
//   // console.log("found video :" ,foundVideo);



// // CLicked video setting to be a active one for display
//   // setActiveVideo(foundVideo);
  

// }

console.log("activeeeee video" , activeVideo);

  return(
    <>
{Videos.length === 0 || Object.keys(activeVideo).length === 0 ? null : (
  <>
    <div className="main-image">
      <Hero activeVideo={activeVideo} />
    </div>
    <div className="details-content">
      <div className="details-contentview">
        <Header  activeVideo={activeVideo} />
        <Comment activeVideo={activeVideo} />
      </div>
      <VideoList videos={Videos}  activeVideo={activeVideo} />
    </div>
  </>
)}
    </>
  )
}

export default Home;

