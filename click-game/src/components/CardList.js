//import react and react component from react
import React,{ Component} from 'react';
import Card from './Card'
import robots from '../robots'

// create a function that that render the list of cards with images using map function in react
class Cardlist extends Component{
     state = {
          robots:robots
     }

     handleRobotClick = (event)=>{
           const sortedRobots = robots.sort(function(){ return Math.random()-0.5})
      
       this.setState({robots: sortedRobots})

     }

     render(){
 return (
     <div>
      {
           this.state.robots.map((robot, i)=>(
               <Card 
               name = {robot.name } 
               id = {robot.id} 
               handleRobotClick ={this.handleRobotClick} 
               key = {i}/> 
           )) 
      }
    </div>
 )}}
export default Cardlist