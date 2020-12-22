import React from 'react'

class VideoCard extends React.Component{
  
  
  
  
  render(){




const videoCard=this.props.videoCard.snippet

const videoTitle=videoCard.title

const videoThumbnail= videoCard.thumbnails.medium.url

// console.log(videoTitle)

    return(
      <div onClick={()=>this.props.onVideoSubmit(this.props.videoCard)} style={{display:'flex',gap:'12px',alignItems: 'center',cursor:'pointer'}}>

        <img src={videoThumbnail} alt={videoTitle} style={{maxWidth:'170px'}}/>
        
        <p style={{fontSize:'15px'}}>{videoTitle}</p>
        
    
        
      </div>

    )
  }
}

export default VideoCard