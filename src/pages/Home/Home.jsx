
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
      .get("https://brainflix-api-jnlk.onrender.com/videos")
      .then((response) => {
        setVideos(response.data);
    
      });
  }, []); 

  useEffect(() => {
    if (params.videoId){
      axios
      .get(`https://brainflix-api-jnlk.onrender.com/videos/${params.videoId}`)
      .then((response) => {
        setActiveVideo(response.data);
        
      })
    }else{
      axios
      .get(`https://brainflix-api-jnlk.onrender.com/videos/84e96018-4022-434e-80bf-000ce4cd12b8`)
      .then ((response) => {
        setActiveVideo(response.data);
       
      })
      .catch((err)=> console.log("ERROORRRdRR",err));
    }
   
  }, [params.videoId]);

  
  const postComment = (commentText) => {
    axios
      .post(`https://brainflix-api-jnlk.onrender.com/videos/${activeVideo.id}`, {
        comment: commentText,
      })
      .then((response) => {
        // Fetch the updated comments from the server
        axios
          .get(`https://brainflix-api-jnlk.onrender.com/videos/${activeVideo.id}`)
          .then((response) => {
            const updatedVideo = response.data;
            setComments(updatedVideo.comments);
          })
          .catch((error) => {
            console.log('Error fetching updated comments:', error);
          });
      })
      .catch((error) => {
        console.log('Error posting comment:', error);
      });
  };
  
  const deleteComment = (commentId) => {
    axios
      .delete(`https://brainflix-api-jnlk.onrender.com/videos/${activeVideo.id}/comments/${commentId}`)
      .then(response => {
        console.log('Comment deleted successfully', response);

        // Fetch the updated comments from the server
        axios
          .get(`https://brainflix-api-jnlk.onrender.com/videos/${activeVideo.id}`)
          .then(response => {
            const updatedVideo = response.data;
            setComments(updatedVideo.comments);
          })
          .catch(error => {
            console.log('Error fetching updated comments:', error);
          });
      })
      .catch(error => {
        console.error('Error deleting comment', error);
      });
  };

  const updateLike = () => {
    // Check if activeVideo is defined and has the necessary properties
    if (activeVideo && activeVideo.id) {
      axios
        .put(`https://brainflix-api-jnlk.onrender.com/videos/${activeVideo.id}/likes`)
        .then(response => {
          console.log('Likes', response.data);
        })
        .catch(error => {
          console.error('Error updating like:', error);
        });
    } else {
      console.error('Active video is not defined or missing required properties');
    }
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
        <Header  activeVideo={activeVideo} updateLike={updateLike} />
        <Comment activeVideo={activeVideo} comments={comments}
  postComment={postComment} deleteComment={deleteComment} />
      </div>
      <VideoList videos={Videos}  activeVideo={activeVideo} />
    </div>
  </>
)}
    </>
  )
}

export default Home;

