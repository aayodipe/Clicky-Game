import React from 'react'
import tachyon from "tachyons"

const Card = (props)=>{
return (
     <div className="card m-3 bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5" style={{ width: '18rem' }}>
    <img  className="card-img-top" alt = {props.name} src={`https://robohash.org/${props.id}.png`} onClick = {props.handleRobotClick} />
     </div>
   
)
}
export default Card