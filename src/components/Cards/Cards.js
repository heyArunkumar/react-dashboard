import React from 'react'
import Card from '../Card/Card'
import { CardsData } from '../Data/Data'
import './Cards.css'
const Cards = () => {
  return (
    <div className='Cards'>
      {CardsData.map((card, id) => {
        return (
          <div className='parentContainer'>
            <Card
              img={card.img}
              name={card.name}
              planName={card.planName}
              nextMeal={card.nextMeal}
              foodTime={card.foodTime}
              progress={card.progress}
              checkInDate={card.checkInDate}
              color={card.color}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Cards