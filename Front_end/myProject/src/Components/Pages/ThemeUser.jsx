import React from 'react'
import Theme from './Theme'
import { Link } from 'react-router-dom'
import './ThemeUSer.css'
import Nav from './Nav'
import pic1 from './pic1.jpg'
import pic2 from './pic2.jpg'
import pic3 from './pic3.jpg'
import pic4 from './pic4.jpg'
import pic5 from './pic5.jpg'
import pic6 from './pic6.jpg'
import Footer from './Footer'

const ThemeUser = () => {
  return (
    <div>
    <Nav/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <main className='theme'>
    <h2 className='head'>Theme Decoration</h2>
    <br/>
    <section className="event-images">
      <img src={pic1} alt="Birthday Event 1" />
      <img src={pic2} alt="Birthday Event 2" />
      <img src={pic3} alt="Birthday Event 3" />
    </section>
    <section className="event-images">
      <img src={pic4} alt="Birthday Event 1" />
      <img src={pic5} alt="Birthday Event 2" />
      <img src={pic6} alt="Birthday Event 3" />
    </section>
    
    <button ><Link to ='/themetable'>View Details</Link></button>
  </main>
  <Footer/>
    </div>
  )
}

export default ThemeUser
