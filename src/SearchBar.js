import React from 'react'

class SearchBar extends React.Component{
  
state={text:''}

  inputChange=(e)=>{
this.setState({text: e.target.value})

  }

  submitHandler=(e)=>{
    this.props.submit(this.state.text)
    
    e.preventDefault()

  }

  
  render(){
    return(
      <div>
           <form onSubmit={this.submitHandler} style={{border: '2px solid black',marginTop:'15px'}}>
               Enter Video Search:
                <div style={{width: '80%'}} className="input-field inline">
                  <label htmlFor="search"></label>
                  <input id="search" 
                   type="text"
                   value={this.state.text}
                   onChange={this.inputChange}/> 
                 </div>
            </form>
        </div>    )
  }
}

export default SearchBar

