import React from 'react'
import '../Client/Client.css'
import { FaSearch } from "react-icons/fa"
const Client = () => {
  return (
    <div >
      <div className='clients'>
        <div className='Client-section'>
          <div className='active-client'>
            <span className='actives'>21 Active Client</span><br></br>
            <span className='client'>Clients</span>
          </div>
        </div>
        <div className='Client-search'>
          <FaSearch className='seacr-input-icon' />
          <input type="text" placeholder='Search Clients' /><span> <button className='create-New-Btn new-client-btn'>+ New Client</button></span>
        </div>
      </div>
      <div className='active-client-count'>
        <div >
          <span className='active-current'>Active Clients(21)</span>
          <div className='client-current-active'></div>
        </div>
        <div >
          <span>Past Clients(43)</span>
        </div>
        <div >
          <span>All Clients(64)</span>
        </div>
      </div>

    </div>
  )
}

export default Client