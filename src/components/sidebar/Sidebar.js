import React, { useState } from 'react'
import '../sidebar/Sidebar.css'
import { SidebarData } from '../Data/Data'
import { bottomNavMenu } from '../Data/Data'
import { FaBars } from "react-icons/fa"
import { motion } from 'framer-motion'




const sideBarVarient = {
  true: {
    left: '0'
  },
  false: {
    left: '-60%'
  }
}
const Sidebar = () => {
  const [selected, setSelected] = useState(3)
  const [expanded, setExpanded] = useState(true)
  return (
    <>
      <div className='bars' style={expanded ? { left: "60%" } : { left: "3%" }} onClick={() => setExpanded(!expanded)}>
        <FaBars />
      </div>
      <motion.div className='sidebar' variants={sideBarVarient} animate={window.innerWidth <= 768 ? `${expanded}` : ''}>
        <div className='logo'>
          <p className='logo-name'>Plain<span className='logo-life'>life.</span><br></br><span className='logo-para'>Healthy meals, healthy life.</span></p>

          <button className='create-New-Btn ctreateButton'>+ Create New</button>
        </div>
        <div className='navbar' >
          <div className='menu menubar'>
            <span>Menu</span>
            {SidebarData.map((item, index) => {
              return (
                <div
                  className={selected === index ? "menuItem active" : "menuItem"}
                  key={index}
                  onClick={() => setSelected(index)}
                >
                  <item.icon /> <span>{item.heading}</span>
                </div>
              )
            })}
          </div>


          <div className='bottomMenu'>
            <div className='menu bottomMenuname'>
              <span>Your Account</span>
              {bottomNavMenu.map((item, index) => {
                return (
                  <div className='menuItem'>
                    <item.icon /> <span>{item.heading}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
