import "./VideoList.scss";
import { Link, } from "react-router-dom";

function VideoList (props){

  return(
    <div className="videolist">
     <h3 className="videolist__head">NEXT VIDEOS</h3>


<div className="videolist__container">
{props.videos.filter((video) => video.id !== props.activeVideo.id)
.map((video) => (
  <div key={video.id}>
 <Link className="videolist__link" to={`/video/${video.id}`}>
  <div className='videolist-element'>
  <div className='videolist-imagesection'>
  <img className='videolist-image' src={video.image} alt={video.title} />
  </div>

          <div className='videolist-eachdetails'>
          <h4 className='videolist-title'>{video.title}</h4>
          <p className='videolist-channel'>{video.channel}</p>
          </div>
</div></Link></div>
))}
</div>


</div>

  )
}

// /video/:videoId <Link to={`/recipes/${recipe.id}`}>

export default VideoList

// onClick={() => props.handleVideoClick(video.id)}