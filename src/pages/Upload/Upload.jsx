import { useState ,  useEffect } from 'react';
import "./Upload.scss";
import thumbnail from "../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";



function Upload(){

  const navigate = useNavigate();
  const handleSubmit = (event) => {
   
    //Prevent defaultPage Load 
    event.preventDefault();
   

    // Display an alert
    alert('Form submitted successfully! Congratulationssssss');
  
    //Navigate to home page after form submit
  
    navigate("/Home");
  };


  return (
    <div className="upload">
      <form onSubmit={handleSubmit} >
    <h1 className='upload-videohead'>Upload Video</h1>
<div className="upload-videocontainer">
  <div className="upload-videodisplay">
  <label htmlFor='upload-videothumb' className="upload-thumb__label" >VIDEO THUMBNAIL</label>
    <img className='upload-videothumb' id='upload-videothumb' src={thumbnail} alt="videoThumbnail" />
  </div>

<div className="upload-videodetails">
<label htmlFor="upload-titleinput" className="upload-title__label">TITLE YOUR VIDEO</label>
      <textarea type="textarea" className="upload-title__text" id="upload-titleinput" placeholder="Add a title to your video" ></textarea>

      <label htmlFor="upload-videoinput" className="upload-video__label">ADD A VIDEO DESCRIPTION</label>
      <textarea type="textarea" className="upload-video__text" id="upload-videoinput" placeholder="Add a description to your video" ></textarea>
</div>
 

</div>

<div className="upload-submitsection">
<button className="upload-cancel__btn1"  id="upload-cancel__btn1">CANCEL</button>
      <button className="upload-video__btn" type="submit" id="upload-video__btn">PUBLISH</button>
      <button className="upload-cancel__btn"  id="upload-cancel__btn">CANCEL</button>

    </div>
    </form>
    </div>
  )
}

export default Upload ;