// BirthdayLandingPage.jsx

import React from 'react';
import './LandingPage.css'
const BirthdayLandingPage = () => {
  return (
    <div className="landing-page">
      <nav>
        <ul>
          <li><a href="#signup">Sign Up</a></li>
          <li><a href="#login">Login</a></li>
        </ul>
      </nav>
      <header>
        <div className="header-content">

          <h1>Join Us for a Birthday Bash!</h1>
          <p>Celebrate a special day filled with joy, laughter, and memories.</p>
          <button>Register Now</button>
        </div>
      </header>
      <main>
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
        <section className="event-details">
          <h2>About Us</h2>
          <p>PartyPal is an innovative and user-friendly application designed to streamline the 
          planning and coordination of birthday events. Whether you're organizing a small 
          family gathering or a large-scale birthday bash, 
          PartyPal has all the tools and features you need to make your celebration a memorable success.Keep track of 
          your guest list effortlessly. Invite guests via email, SMS, or social media platforms, and monitor RSVPs in real-time.
           PartyPal provides a centralized dashboard to manage guest responses and send reminders as needed.</p>
          <button>Learn More</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Birthday Bash. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default BirthdayLandingPage;
