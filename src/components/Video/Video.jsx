import React from 'react';
import { useParams } from 'react-router-dom';


function Video({videos}) {
 

  const {videoId} = useParams();
  // console.log(`id param is: ${videoId}`);
  // console.log(`data: ${videos}`)
  // console.log("data: ", videos)

  const movie= videos.find((video) => video.id === videoId);
  console.log("movie", movie);


  return (
    <div>
        <video className="main-heroimage" controls poster={movie.image} alt={`movie ${movie.title}`}></video>
  

    </div>
  );
}


export default Video;