import React from 'react'
import VideoCard from './VideoCard'
class VideoList extends React.Component{
  render(){

    const vCard= this.props.video.map((video)=>{
      
      return(
        <div key={video.id.videoId}>
        <br/>
        <div><VideoCard 
         videoCard={video}
          onVideoSubmit={this.props.videoSubmit}/></div>
        <hr  style={{color: '#000000'}}/>
        <br/>
        </div>
      
      )
    })


    return(
      <div>
      <div><h4>{this.props.found}</h4></div>
      

      <div>{vCard}</div>

      </div>
    )
  }
}

export default VideoList