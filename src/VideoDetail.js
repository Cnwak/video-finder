import React from 'react'

const VideoDetail =(props)=>{
  if(!props.videoTitle && !props.videoDescription){
    return(<div></div>)
  }else{
    return(
      <div>
        
        <div className="video-container">
            <iframe title={props.videoTitle} width="420" height="315"
            src={`https://www.youtube.com/embed/${props.videoDisplay}`}>
            </iframe>
        </div>

      <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{props.videoTitle}</span>
            <p>{props.videoDescription}</p>
          </div>
        </div>

      </div>
    )
  }
  
}


export default VideoDetail