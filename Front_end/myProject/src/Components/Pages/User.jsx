
import React, { useState } from 'react';
import EventDetails from './EventDetails';
import './User.css';
import Theme from './Theme';
import { Link } from 'react-router-dom';
import LandingPage from './LandingPage';
import Nav from './Nav'
import Footer from './Footer'
function Bookevent() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Function to handle image click
  const handleImageClick = (event) => {
    setSelectedEvent(event);
  };

  return selectedEvent ? (
    <EventDetails event={selectedEvent} />
  ) : (
   

    <div className="book-event">
    <Nav/>
    <br/>
    <br/>
    <br/>
      <h1 className="event-title">Book Your Events</h1>
      <main className='theme'>
      <section className="event-images">
        <img src="https://images.pexels.com/photos/7100327/pexels-photo-7100327.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 1" />
        <img src="https://images.pexels.com/photos/7180795/pexels-photo-7180795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Birthday Event 2" />
        <img src="https://images.pexels.com/photos/7099893/pexels-photo-7099893.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
      </section>
      <section className="event-images">
        <img src="https://images.pexels.com/photos/7328245/pexels-photo-7328245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Birthday Event 1" />
        <img src="https://images.pexels.com/photos/10024453/pexels-photo-10024453.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 2" />
        <img src="https://images.pexels.com/photos/5610325/pexels-photo-5610325.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Birthday Event 3" />
      </section>
      <button><Link to = '/eventform'>Book</Link></button>
    </main>
    <div><Footer/></div>
    </div>
  );
}

export default Bookevent;