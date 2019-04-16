//import react and react component from react
import React,{ Component} from 'react';
import Card from './Card'
import robots from '../robots';
import Header from './Header'
import css from '../index'
import Jumbotron from './Jumbotron'

// create a function that that render the list of cards with images using map function in react
class Cardlist extends Component{
     state = {
          instruction: 'Click any Robot to get started',
          robots:robots,
          score:0,
          topScore :0,
          RobotAlreadyClicked : [],
     }
    
     handleRobotClick = (event)=>{
           event.preventDefault()
          // Get the name of the Robot 
           const itemClicked = event.target.alt; 
         //Sort the Robot
     const sortedRobots = robots.sort(function(){ return Math.random()-0.5}) 
     // Check if the robot is already click

      let isRobotAlreadyClicked = this.state.RobotAlreadyClicked.includes(itemClicked)
      console.log(isRobotAlreadyClicked)
   if(!isRobotAlreadyClicked) {
     const updatedTopScore = this.state.score >= this.state.topScore
          ? this.state.score + 1
          : this.state.topScore; 

     this.setState({
          RobotAlreadyClicked: [...this.state.RobotAlreadyClicked, itemClicked],
          instruction: 'Hurraaay! Thanks for selecting me',     
          robots:sortedRobots,
          score:this.state.score + 1,
          topScore: updatedTopScore,    
     })
    console.log(this.state.score, this.state.updatedScore)
   } else{
          this.setState({
               RobotAlreadyClicked:[],
               instruction:  'Oh no! I have been selected',     
               robots:sortedRobots,
               score:0,     
          }) 
          console.log(this.state.RobotAlreadyClicked)
     }

     if(this.state.score === this.state.updatedScore){
          console.log(this.state.updatedScore)
       this.setState({topScore:this.state.updatedScore+1})
     }
}
     render(){
          return (
              <div>
                    <Header  instruction = {this.state.instruction} score = {this.state.score}  topScore = {this.state.topScore}/>
                   <Jumbotron />
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