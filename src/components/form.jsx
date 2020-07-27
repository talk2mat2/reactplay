import React, { Component } from 'react';
class UserForm extends Component {
  constructor(){
      super()
    this.state = { firstname:"" ,
lastname:"",
isTall:false}
    this.handleChange=this.handleChange.bind(this)
  }
handleChange(event){
    event.target.type==="checkbox"?this.setState({isTall:event.target.checked}):
    this.setState({[event.target.name]:event.target.value})
}
    render() { 
    return ( <form><input type="text" value={this.state.firstname} name="firstname" placeholder="first name? " onChange={this.handleChange}/><br/>
    <input type="text" value={this.state.lastname} name="lastname" placeholder="last name? " onChange={this.handleChange}/>
    <br/><p>are you tall <input type="checkbox" name="isTall" checked={this.state.isTall} onChange={this.handleChange}/></p>
    <br/><h3>{this.state.firstname +" " + this.state.lastname}</h3></form> );
    }
}
 
export default UserForm;