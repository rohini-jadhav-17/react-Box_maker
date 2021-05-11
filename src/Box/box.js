import React, { Component } from 'react'

class Box extends Component{
    
    render(){
        return(
            <div>
                <div 
                style={{height:`${this.props.height}px`,
                width:`${this.props.width}px`,
                backgroundColor:`${this.props.color}`}}>
                </div>
                <button onClick={this.props.removeBox}>X</button>
            </div>
            
        )
    }
}

export default Box;
