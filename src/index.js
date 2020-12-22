import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './SearchBar.js'
import axios from 'axios'
import Video from './VideoList'
import VideoDetail from './VideoDetail'
import Message from './Message'


class App extends React.Component{

  state={video: [],
  found:'',
selectedVideoTitle: null,
selectedVideoDescription:null,
videoDisplay: null}
  
  onSubmitForm=async (text)=>{

    const key= 'AIzaSyBOJiPvrBCRzpkVgUZBIBeTj1VIUHyADIQ'
    
const response = await axios.get( ' https://www.googleapis.com/youtube/v3/search' , {
  params: {part:'snippet',
          maxResults :10,
          type: 'video',
          order:'viewCount',
          key,
          q: text, 
  },

})


if(response.data.pageInfo.totalResults=== 0){
  this.setState({found:'No video to display for your query'})
}else{
  this.setState({found:`Displaying the top ${response.data.items.length} videos`})
}

    
if(this.state.found === 'No video to display for your query'){
  this.setState({selectedVideoTitle: ''})
this.setState({selectedVideoDescription:''})
}

    this.setState({video:response.data.items});

    

  }

  onVideoClick=(video)=>{

this.setState({videoDisplay:video.id.videoId})
this.setState({selectedVideoTitle: video.snippet.title})
this.setState({selectedVideoDescription:video.snippet.description})
        }

  
  render(){
    return(
    <div>
    <div className="container center-align">
      <h1>Youtube Video Finder</h1>

            <SearchBar submit={this.onSubmitForm}/>

            <Message found={this.state.found}/>


            <div style={{height:'30px'}}></div>


            <div className="row">

                <div className="col s12 m8 l9">
                  <VideoDetail videoDisplay={this.state.videoDisplay}
                              videoTitle={this.state.selectedVideoTitle}
                              videoDescription={this.state.selectedVideoDescription}/>
                </div>

              <div className="col s12 m4 l3"> 
                  <Video videoSubmit={this.onVideoClick} video={this.state.video}
                              />
              </div>

            </div>
            
            


            
      
    </div>
    <footer  className="page-footer grey darken-2">
  <div className="footer-copyright grey darken-2">
    <div className="container">Copyright &copy; 2020 Chijindu Nwakama</div>
  </div>
</footer>
    
    </div>)
  }
}

ReactDOM.render(
  <App/>,document.getElementById('root')
)