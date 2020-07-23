import React, { Component } from 'react';

class checkbox extends Component {
    state = { checked:false }
    render() { 
        return ( <div><input type="checkbox" checked={this.props.Elements.isChecked} onChange={()=>this.props.handleClick(this.props.Elements.id)} /><p>check me</p></div> );
    }
}
 
export default checkbox;