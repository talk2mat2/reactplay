import React, { Component } from 'react';

class Login extends Component {
   constructor(){
       super()
    this.state = { isLoggedIn:false }
    this.userLogger=this.userLogger.bind(this)
   }
    userLogger(){
        this.setState((prevState)=>{
           return {isLoggedIn:!prevState.isLoggedIn}
        })

    }
    render() { 
    return ( <div><button onClick={()=>{this.userLogger()}}>{this.state.isLoggedIn?<p>log out</p>:<p>login</p>}</button><p>you are currently logged {this.state.isLoggedIn?<p>in</p>:<p>off</p>}</p></div> );
    }
}
 
export default Login;