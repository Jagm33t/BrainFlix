// import { useState } from 'react';
import "./Home.scss";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


import Hero from "../../components/Hero/Hero"
import Header from "../../components/Header/Header";
import Comment from '../../components/Comment/Comment';
import VideoList from '../../components/VideoList/VideoList';



function Home (){

  //setting data from json file to Videos using state
  const [Videos, setVideos] = useState([]);

  const [ activeVideo, setActiveVideo ] = useState({}); 

  const params = useParams();


 

  useEffect(() => {
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=2674a343-d3a8-4521-a489-4042f7462147")
      .then((response) => {
        setVideos(response.data);
    
      });
  }, []);

  useEffect(() => {
    if (params.videoId){
      axios
      .get(`https://project-2-api.herokuapp.com/videos/${params.videoId}/?api_key=2674a343-d3a8-4521-a489-4042f7462147`)
      .then((response) => {
        setActiveVideo(response.data);
      })
    }else{
      axios
      .get(`https://project-2-api.herokuapp.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8?api_key=2674a343-d3a8-4521-a489-4042f7462147`)
      .then ((response) => {
        setActiveVideo(response.data);
       
      })
      .catch((err)=> console.log("ERROORRRdRR",err));
    }
   
  }, [params.videoId]);
    




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

