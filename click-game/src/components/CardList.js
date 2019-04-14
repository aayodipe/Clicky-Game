//import react and react component from react
import React,{ Component} from 'react';
import ReactDom from 'react-dom'
import Card from './Card'


// create a function that that render the list of cards with images using map function in react
const Cardlist = props =>{
 return (
     <div>
      {
           props.robots.map((robot, i)=>(                
               <Card name = {robot.name } id = {robot.id}/> 
           ))
          
 
      }
    </div>
 )}
export default Cardlist