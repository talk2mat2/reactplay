import React, { Component } from 'react';


class Apidata extends Component {
   constructor(){
       super()
    this.state = { Data:[] ,isloading:false}
   }
async componentDidMount(){
    this.setState({isloading:true})
    // const value=await fetch('https://api.covid19api.com/total/country/nigeria')  
    // const Data2= await value.json()


    // this.setState({Data:Data2})
    // this.setState({isloading:false})
    // console.log(this.state.Data[1])

    fetch('https://api.covid19api.com/total/country/nigeria').then(success=>success.json())
    .then(Data2=>this.setState({Data:Data2,isloading:false})).catch(e=>console.log(e))



  
}

    render() { 
    const showItemStart= this.state.Data.length-4
    const showItemEnd= this.state.Data.length-1
    
    return ( <div>{this.state.isloading?<h2>loading data ...</h2>:this.state.Data.slice(showItemStart-showItemEnd).map((values)=><ul key={values.Date}>
        <h2>corona update info :Date- {values.Date.split('T00:00:00Z')}</h2>
        <li>country:{values.Country}</li>
        <li>total Death:{values.Deaths} people have died</li>
        <li>Recovered Cases:{values.Recovered} people recovered</li>
        <li>Current Active Cases:{values.Active} people are with the sickness</li>
    </ul>)}</div> );
    }
}
 
export default Apidata;