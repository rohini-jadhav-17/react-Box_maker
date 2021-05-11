import React, { Component } from 'react'
import Box from '../Box/box';
import NewBoxForm from '../NewBoxForm/newBoxForm';
 class BoxList extends Component{
     constructor(props){
         super(props);
         this.state={
             boxes: []
         }
         this.create = this.create.bind(this);
     }
     remove(id){
         this.setState({
             boxes: this.state.boxes.filter(box => box.id !== id)
         })
     }
     create(box){
         this.setState({
             boxes: [...this.state.boxes, box]
         })
     }
     render(){
         const boxes = this.state.boxes.map(box=>{
              return <Box 
                key={box.id} 
                id={box.id} 
                height={box.height} 
                width={box.width} 
                color={box.color}
                removeBox={()=> this.remove(box.id)}/>
         })
         return(
             <div>
                 <h1>Colour Box maker</h1>
                 <NewBoxForm createBox={this.create}/>
                 {boxes}
             </div>
         )
     }
 }

 export default BoxList;