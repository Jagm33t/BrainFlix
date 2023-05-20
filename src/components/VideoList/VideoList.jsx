import "./VideoList.scss";
function VideoList (props){

  return(
    <div className="videolist">
     <h3 className="videolist__head">NEXT VIDEOS</h3>


<div className="videolist__container">
{props.videos.filter((video) => video.id !== props.activeVideo.id)
.map((video) => (
  <div key={video.id}onClick={() => props.handleVideoClick(video.id)}>
<div className='videolist-element'>
  
          <img className='videolist-image' src={video.image} alt={video.title} />
          <div className='videolist-eachdetails'>
          <h4 className='videolist-title'>{video.title}</h4>
          <p className='videolist-channel'>{video.channel}</p>
          </div>
</div></div>
))}
</div>


</div>

  )
}



export default VideoList