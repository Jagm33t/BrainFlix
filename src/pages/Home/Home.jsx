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

  const [comments, setComments] = useState([]);

  const params = useParams();


 

  useEffect(() => {
    axios
      .get("http://localhost:8080/videos")
      .then((response) => {
        setVideos(response.data);
    
      });
  }, []);

  useEffect(() => {
    if (params.videoId){
      axios
      .get(`http://localhost:8080/videos/${params.videoId}`)
      .then((response) => {
        setActiveVideo(response.data);
      })
    }else{
      axios
      .get(`http://localhost:8080/videos/84e96018-4022-434e-80bf-000ce4cd12b8`)
      .then ((response) => {
        setActiveVideo(response.data);
       
      })
      .catch((err)=> console.log("ERROORRRdRR",err));
    }
   
  }, [params.videoId]);
    
  const postComment = (commentText) => {
    axios
      .post(`https://project-2-api.herokuapp.com/videos/${activeVideo.id}/comments?api_key=2674a343-d3a8-4521-a489-4042f7462147`, {
        comment: commentText
      })
      .then(response => {
        const newComment = response.data;
        setComments([...comments, newComment]);
      })
      .catch(error => {
        console.log('Error posting comment:', error);
      });
  };

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
        <Comment activeVideo={activeVideo} comments={comments}
  postComment={postComment} />
      </div>
      <VideoList videos={Videos}  activeVideo={activeVideo} />
    </div>
  </>
)}
    </>
  )
}

export default Home;

