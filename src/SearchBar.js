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
               
           <div style={{display:'flex',flexWrap:'nowrap',alignItems:'center',gap: '15px'}}>
                <div style={{width: '80%'}} className="input-field inline">
                  <label htmlFor="search"></label>
                  <input id="search" 
                   type="text"
                   placeholder="Search youtube..."
                   value={this.state.text}
                   onChange={this.inputChange}/> 
                 </div>

                 <div>
                 <button className="btn grey darken-2 waves-effect waves-light" type="submit" name="action">
                  <i className="material-icons">search</i>
                  </button>
                </div>
            </div>
          </form>
        </div>    )
  }
}

export default SearchBar

