import "./Comment.scss";
import MainImg from "../../assets/Images/Mohan-muruge.jpg"


function Comment (props){



  // console.log(props.comments)
  const activeComments = props.activeVideo.comments;
  return (

    <>

<div>
<div className="main-parttwo">
 
 <h3 className="main-commenthead">{props.activeVideo.comments.length} Comments</h3>
    <div className="main-commenttype">
      <div className="main-coomentone">
      <img className="main-commentimage" src={MainImg} alt="MainImage"/>
      </div>
      <div className="main-commenttwo">
        <div className="main-commentimp">
        <label htmlFor="main-commentinput" className="main-comment__label">JOIN THE CONVERSATION</label>
      <textarea type="textarea" className="main-comment__text" id="main-commentinput" placeholder="Add a new comment" required></textarea>
        </div>

        <button className="main-comment__btn" type="submit" id="submit-btn">COMMENT</button>
      </div>
  
    </div>


    {activeComments.map((comment) => 
  <div key={comment.id} className="main-commentcontainer">
    <div className="main-commentelement">
    <img className="main-commentimgplace" src={MainImg} alt="Placeholder Text"/>
      <div className="main-commentdisplay">
        <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{comment.name}</h3>
          <p className="main-commenttime">{new Date(comment.timestamp).toLocaleDateString()}</p>
        </div>
        <div className="main-imgcom">
      <p className="main-commentarea">{comment.comment}</p>
      </div>
    </div>
   </div>
  </div> 
)}
 </div>
</div>
    </>
  )
}

export default Comment