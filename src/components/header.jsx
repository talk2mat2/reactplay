import React, { Component } from 'react';
class header extends Component {
    constructor(){
        super()
        this.state={
            number:"$1000",
            time: new Date(),
            logged:true
            
        }
        this.users={
            user1:"chiboy",
            user2:"talk2mat2"
        }
    }
    state = {  }
    render() { 
    return (<div> <div>header and the total amount is {this.state.number} and the user is {this.users.user1}</div> 
    <Testing status={this.state.logged}/>
    </div>)
    }
}
 
class Testing extends Component {
constructor(){
    super()
    this.state={logged:'like' ,amount:0
}
this.changeState=this.changeState.bind(this)
this.changeState2=this.changeState2.bind(this)
this.changeStyle=this.changeStyle.bind(this)
}


changeState(){
    //  this.setState({amount:3})
     this.setState((oop)=>{
       return  { amount:oop.amount+3}
     })
    // this.user='kk'
    // alert (this.user)
}
changeState2(){
    //  this.setState({amount:3})
     this.setState((prevSate)=>{
       return  { amount:prevSate.amount-1}
     })
    // this.user='kk'
    // alert (this.user)
}

changeStyle(){
    let styleColor
    this.state.amount<0?styleColor="red":styleColor="blue"
    return styleColor
}

user=""
userstyles=""
    render() { 
        // this.props.status===false?this.setState({logged:"in"}):this.setState({logged:"out"})
    //    this.props.status===true?this.user="in as martins":this.user="out";
    if (this.props.status===true){this.user="in as martins"
    this.userstyles="blue"}
    else{this.user="out" 
    this.userstyles="red"}
       console.log(this.props)
    return (<div> <small onClick={this.changeState}>you are currently logged <section  style={{color:this.changeStyle(),fontSize:'30px'}}>{this.state.amount}</section></small><button style ={{minWidth:'100px',minHeight:'20px'}}onClick={this.changeState2}></button> </div>);
    }
}
 

 
export default header;