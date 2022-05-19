import React from 'react'
import '../Card/Card.css'
import { Circle } from 'rc-progress';

import { FaEllipsisH } from "react-icons/fa"
const Card = (props) => {

  return (
    <div className='Card'>
      <div className='card-section'>
        <div className='card-top'>
          <div className='card-profile'>
            <div className='cardImg'>
              {/* <img src={require('../Img/c1.jpg')} alt="profile-img" width={50}></img> */}
              {/* / <img src={props.img} alt="D"></img>  */}
              {props.img}

            </div>
            <div className='cardName'>
              <span className='card-name'>{props.name}</span><br></br>
              <span className='caed-planName'>{props.planName}</span>

            </div>
          </div>
        </div>
        <div className='card-menu-icon'>
          <FaEllipsisH />
        </div>
      </div>
      <div className='next-Meal'>
        <span>Next Meal</span>
      </div>
      <div className='Food-Timing'>
        <h5>{props.foodTime}</h5>
      </div>
      <hr></hr>

      <div className='Card-bottom-section'>
        <div className='progressBar'>
          <span className='progress ' >Progress</span><br></br>
          <div className='circleProgress'>
            <div>
              <Circle className='circle' percent={props.progress} strokeWidth={16} trailWidth={16} strokeColor={props.color} />
            </div>
            <div>
              <span className='checkindate'>{props.progress}%</span>
            </div>
          </div>
        </div>

        <div className='upcoming-checkin-date'>
          <span className='upcoming '>Upcoming Check-in</span><br></br>
          <span className='checkindate'>{props.checkInDate}</span>
        </div>
      </div>
    </div>
  )
}

export default Card