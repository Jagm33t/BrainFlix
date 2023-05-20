import "./Comment.scss";
import MainImg from "../../assets/Images/Mohan-muruge.jpg"


function Comment (props){

  console.log(props.activeVideo.comments)
  const activeComments = props.activeVideo.comments;
  return (
    <>





<div className="main-parttwo">
 
 <h3 className="main-commenthead">{props.activeVideo.comments.length} Comments</h3>
    <div className="main-commenttype">
      <div className="main-coomentone">
      <img className="main-commentimage" src={MainImg} alt="MainImage"/>
      </div>
      <div className="main-commenttwo">
      <label htmlFor="main-commentinput" className="main-comment__label">JOIN THE CONVERSATION</label>
      <textarea type="textarea" className="main-comment__text" id="main-commentinput" placeholder="Add a new comment" required></textarea>
        <button className="main-comment__btn" type="submit" id="submit-btn">COMMENT</button>
      </div>
  
    </div>


    {activeComments.map((comment) => 
  <div key={comment.id} className="main-commentcontainer">
    <div className="main-commentelement">
      <div className="main-commentdisplay">
        <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{comment.name}</h3>
          <p className="main-commenttime">{new Date(comment.timestamp).toLocaleDateString()}</p>
        </div>
      </div>
      <p className="main-commentarea">{comment.comment}</p>
    </div>
  </div>
  
)}


    </div>

  {/* <div className="main-parttwo">
 
    <h3 className="main-commenthead">3 Comments</h3>
       <div className="main-commenttype">
       <label htmlFor="main-commentinput" className="main-comment__label">JOIN THE CONVERSATION</label>
       <img className="main-commentimage" src={MainImg} alt="MainImage"/>
        <textarea type="textarea" className="main-comment__text" id="main-commentinput" placeholder="Add a new comment" required></textarea>

       <button className="main-comment__btn" type="submit" id="submit-btn">COMMENT</button>
       </div>


      <div className="main-commentcontainer">
        <div className="main-commentelement">
          <img className="main-commentimage" src={MainImg} alt="MainImage"/>
          <div className="main-commentdisplay">
            <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{props.activeVideo.comments[0].name}</h3>
          <p className="main-commenttime">{new Date(props.activeVideo.comments[0].timestamp).toLocaleDateString()}</p></div></div>
          <p className="main-commentarea">{props.activeVideo.comments[0].comment}</p> 

        </div>
        <div className="main-commentelement">
        <img className="main-commentimage" src={MainImg} alt="MainImage"/>
        <div className="main-commentdisplay">
            <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{props.activeVideo.comments[1].name}</h3>
          <p className="main-commenttime">{new Date(props.activeVideo.comments[1].timestamp).toLocaleDateString()}</p></div></div>
          <p className="main-commentarea">{props.activeVideo.comments[1].comment}</p> 

        </div>
        {/* <div className="main-commentelement">
        <img className="main-commentimage" src={MainImg} alt="MainImage"/>
        <div className="main-commentdisplay">
            <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{props.activeVideo.comments[2].name}</h3>
          <p className="main-commenttime">{new Date(props.activeVideo.comments[2].timestamp).toLocaleDateString()}</p></div></div>
          <p className="main-commentarea">{props.activeVideo.comments[2].comment}</p> 

        </div> */}

      {/* </div>
     
      </div> */} 
    
    </>
  )
}

export default Comment