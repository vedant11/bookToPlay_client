import React from 'react'
import ReactDOM from 'react-dom'
import '../style/Card.css';

const Card=(props)=>{
    console.log(props)
    const backgroundStyle={
        backgroundImage: `url('/images/${props.image}.jpg')` 
    }

return(<div>
    <div className="card-button"
    style={backgroundStyle}
    />
</div>
)}
export default Card;