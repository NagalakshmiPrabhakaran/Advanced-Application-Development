import React from 'react';
import './EventDetails.css';
import pic1 from './pic1.jpg';
import { Link } from 'react-router-dom';

const EventDetails = () => {
  return (
    <div className="description-container">
      <div className="text-container">
        <h2 className='des'>Events</h2>
        <p className='des'>
          Join us for an exciting event filled with fun and learning. We'll have guest speakers,
          interactive workshops, and plenty of networking opportunities. Don't miss out on this
          chance to connect with like-minded individuals and expand your horizons!Experience the
          magic of our annual Music Festival, where rhythm and melody converge to create unforgettable
          memories. Join us for three days of non-stop entertainment featuring an eclectic lineup of 
          chart-topping artists, emerging talents, and local favorites. From pulsating beats to soulful melodies,
          our festival promises to cater to every musical taste.
          Indulge your senses in a culinary journey with an array of gourmet food trucks offering delectable 
          treats from around the world. Savor mouthwatering dishes while enjoying the live performances or simply 
          relax in our chill-out zones scattered throughout the venue.
          Immerse yourself in the vibrant atmosphere as Central Park transforms into a haven for music lovers. 
          Whether you're dancing under the stars, exploring artisanal stalls, or connecting with fellow enthusiasts, 
          there's something for everyone at Music Festival 2024.
        </p>
        <div className="event-details">
          <p  className='des'><strong>Date:</strong> March 25, 2024</p>
          <p  className='des'><strong>Time:</strong> 10:00 AM - 5:00 PM</p>
          <p  className='des'><strong>Location:</strong> 123 Event Avenue, City, Country</p>
        </div>
        <br/>
       
        <br/>
        
        <button className="register-button"><Link to = '/userdash'>Back</Link></button>
      </div>
      <div className="image-container">
        <img src={pic1} alt="Description" />
      </div>
    </div>
  );
};

export default EventDetails;
