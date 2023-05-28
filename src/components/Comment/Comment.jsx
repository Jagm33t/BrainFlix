import "./Comment.scss";
import MainImg from "../../assets/Images/Mohan-muruge.jpg"
import React, { useState } from 'react';


// Using function to get time period 
export const timeDifference = (timestamp ) => {
  //Current date
  const now = new Date();
  //Date from data
  const commentTime = new Date(timestamp);
  //  difference in seconds calculation
  const differenceSeconds = Math.floor((now - commentTime) / 1000);

  if (differenceSeconds < 60) {
    return `${differenceSeconds} seconds ago`;
 //Result in Minutes
  } else if (differenceSeconds < 3600) {
    const differenceMinutes = Math.floor(differenceSeconds / 60);
    return `${differenceMinutes} minutes ago`;
//Result in  Hours 
  } else if (differenceSeconds < 86400) {
    const differenceHours = Math.floor(differenceSeconds / 3600);
    return `${differenceHours} hours ago`;
  } else {//3600 * 24 gives days
    const differenceDays = Math.floor(differenceSeconds / 86400);
    return `${differenceDays} days ago`;
  }
};







function Comment (props){

  const [newComment, setNewComment] = useState('');

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
      <textarea type="textarea"
       className="main-comment__text" 
       id="main-commentinput" 
       placeholder="Add a new comment"
       value={newComment}
       onChange={event => setNewComment(event.target.value)}
       required>

      </textarea>
        
        </div>

        <button className="main-comment__btn"
         type="submit" 
         id="submit-btn"
         onClick={() => {
          props.postComment(newComment);
          setNewComment('');
         }}
         >COMMENT</button>
      </div>
  
    </div>


    {activeComments.map((comment) => 
  <div key={comment.id} className="main-commentcontainer">
    <div className="main-commentelement">
    <img className="main-commentimgplace" src={MainImg} alt="Placeholder Text"/>
      <div className="main-commentdisplay">
        <div className="main-commentsubdisplay">
          <h3 className="main-commentname">{comment.name}</h3>
          <p className="main-commenttime">{timeDifference(comment.timestamp)}</p>
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
