//import react and react component from react
import React,{ Component} from 'react';
import Card from './Card'
import robots from '../robots';
import Header from './Header'
import css from '../index'

// create a function that that render the list of cards with images using map function in react

const arr = []
class Cardlist extends Component{
     state = {
          instruction: 'Click any Robot to get started',
          robots:robots,
          score:0,
          topScore :0,
          RobotAlreadyClicked : []
     }



//Sort and increment on click of an image
     handleRobotClick = (event)=>{
        const itemClicked = event.target.alt;  
        const RobotAlreadySelected = arr.includes(itemClicked)
        console.log(arr)
        const sortedRobots = robots.sort(function(){ return Math.random()-0.5})  
        console.log(RobotAlreadySelected)
        if(!RobotAlreadySelected){
           
            this.setState({instruction: 'Hurraaay! Thanks for selecting me',     
            robots: sortedRobots,
            score : this.state.score + 1,
            topScore : this.state.topScore + 1
         })
        }else{
           this.setState({
               instruction: 'Oh no! I have been selected',
               robots: sortedRobots,
               score :0
        })
        
        }
        arr.push(itemClicked)         
        this.setState({RobotAlreadyClicked:arr})}
   
     //
     render(){
 return (
     <div>
           <Header  instruction = {this.state.instruction} score = {this.state.score}  topScore = {this.state.topScore}/>
     
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