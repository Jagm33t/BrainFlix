import "./Hero.scss";



function Hero(props){

  return(
    <video className="main-heroimage" controls poster={props.activeVideo.image} alt="activeVideo"></video>
  )
}



export default Hero