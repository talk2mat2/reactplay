import React, { Component } from 'react';





class Main extends Component {
   constructor(){
       super()
    this.state = {time:new Date()  };
    this.completed=this.completed.bind(this)
   }





    completed(){
        const Styles2={backgroudColor:"grey",color:"cyan"}
    let completedStatus
    this.props.Elements.isChecked===true?completedStatus=Styles2:completedStatus=null
    return completedStatus
    }

    render() { 
      
      
    const styles={color:'red'}
    var age=22
    age>=25?styles.color='blue':styles.color='red'
//  const james=Data.forEach(Elements=>
//      <div>
//          <p>{Elements.name}</p>
//          <p>{Elements.age}</p>
//          <p>{Elements.phone}</p>
//      </div>
//  )
     

// if( this.props.isChecked){completedStatus=Styles2}

    return ( 
    <main className="center">
        <p  style={styles}>
        this is a simple react body and <br/> and the time is {this.state.time.toLocaleTimeString()}<br/>
    and users are </p> 
  <ul style={this.completed()}>
    <li>name:{this.props.Elements.name}</li>
    <li>age:{this.props.Elements.age}</li>
    <li>phone: {this.props.Elements.phone}</li>
    <li>checked:{""+this.props.Elements.isChecked}</li>
    </ul>    
    {/* <p>name:{props.name}</p>
    <p>age:{props.name}</p>
    <p>height:{props.name}</p> */}
    
    
    </main> );
    
    }
}

export default Main;