import React from 'react'
import './Sidebar.css'
import Theme from './Theme'
const Sidebar = () => {
  return (
    <div>
    <div id="viewport">
    {/* Sidebar */}
    <div id="sidebar">
      <header>
        <a href="#">Event Craft</a>
      </header>
      <ul className="nav-side">
        <li>
          <a href="#">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/view">
            View Events
          </a>
        </li>
        <li>
          <a href="/theme">
            Theme
          </a>
        </li>
        <li>
          <a href="/foodtable">
             Food
          </a>
        </li>
       
        <li>
          <a href="/login">
            Logout
          </a>
        </li>
      </ul>
    </div>
    {/* Content */}
    
  </div>
  
    </div>
  )
}

export default Sidebar
