import React from 'react'
import Client from '../Client/Client'
import '../MainDash/MainDash.css'
import Cards from '../Cards/Cards'
const MainDash = () => {
  return (
    <div className='MainDash'>
      <Client />
      <Cards />

    </div>
  )
}

export default MainDash