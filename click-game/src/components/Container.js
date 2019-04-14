//React from react 
import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import CardList from './CardList'
import robots from '../robots'






class Container extends Component{
     render(){
          return(
               <div>
          <CardList  robots = {robots}/>
               </div>
          )
     }
}

export default Container