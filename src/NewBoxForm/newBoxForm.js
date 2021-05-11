import React, { Component } from 'react';

const { v4: uuidv4 } = require('uuid');

 class NewBoxForm extends Component{
     constructor(props){
         super(props);
         this.state = {height:"", width:"", color:""};
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
         
     }
     handleChange(e){
         this.setState({
            [e.target.name]: e.target.value //computed property
         })
     }
     handleSubmit(e){
         e.preventDefault();    //prevent refresh page
         const newBox = {...this.state, id: uuidv4()}
         this.props.createBox(newBox);
         this.setState({
            height:"", width:"", color:""
         })
     }
     
     render(){
         return(
             <form onSubmit={this.handleSubmit}>
                <div>
                 <label htmlFor='height'>Height</label>
                 <input
                 type='text'
                    placeholder='Height'
                    name='height'
                    value={this.state.height}
                    id='height'
                    onChange={this.handleChange}/>
                </div>
                <div>
                <label htmlFor='width'>Width</label>
                 <input
                 type='text'
                    placeholder='Width'
                    name='width'
                    value={this.state.width}
                    id='width'
                    onChange={this.handleChange}/>
                </div> 
                <div>
                <label htmlFor='color'>Color</label>
                 <input
                 type='text'
                    placeholder='Color'
                    name='color'
                    value={this.state.color}
                    id='color'
                    onChange={this.handleChange}/>
                </div>
                
                <button >Add new box!!</button>
             </form>
         )
     }
 }

 export default NewBoxForm;