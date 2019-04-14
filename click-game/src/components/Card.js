import React from 'react'


const Card = (props)=>{
return (
     <div className="card m-3 " style={{ width: '18rem' }}>
    <img  className="card-img-top " alt = {props.name} src={`https://robohash.org/${props.id}.png`}/>
     </div>
   
)
}
export default Card