import React, { Component } from 'react';
import Header from './components/header'
import Main from  './components/body'
import Footer from './components/footer'
import Data from "./data"
import Login from "./components/login"
import Apicall from "./components/apicall"

import Checkbox from './components/checkbox'

import './app.css'
import Userform from "./components/form"
// import checkbox from './components/checkbox';




class tesApp extends Component {
    constructor(){
        super()
        this.state={name:'papa', Data:Data,loading:true}
        this.handleClick=this.handleClick.bind(this)
     
       
    }
    sta={Data:Data}
   handleClick(id)
  { 
      this.setState((prevState)=>{
         
          const updatedData= prevState.Data.map((datas)=>
             { if(datas.id===id){
                  datas.isChecked=!datas.isChecked
                  console.log(datas.name)
              }
              return datas
            } 
            
          )
         
          return {Data:updatedData}   
      })
     

   }
   componentDidMount(){
       setTimeout(()=>{
           this.setState({loading:false})
       },3000)  
   }
    render() { 
        const listData=this.state.Data.map(Elements=><Main Elements={Elements} key={Elements.id} />
        )
        const Checkboxdata= this.state.Data.map(values=><Checkbox Elements={values} key={values.id} id={values.id} handleClick={this.handleClick} /> )
        return ( <div className="wrapper">
            <Header />
            <Userform />
            <Login />
        <div>total number of users is :{listData.length} {this.state.name}</div>
            
          {this.state.loading===true?<h2>Loading data from server.......</h2>:<div>{Checkboxdata}</div> }
          {listData} 
            <Apicall />
          
            <Footer />
        </div> );
    }
}
 
export default tesApp;