import React from 'react';
import './ViewBooked.css'; // Import the CSS file


function ViewBookedevent() {
  return (
    <div className='bookedEvent-root'>
    
    <div className="view-booked-events-container">
      <h1>View Booked Events</h1>
      <table className="event-table">
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Place</th>
            <th>Date</th>
            <th>Time</th>
            <th>Total Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          
          {/* Add more rows as needed */}
         <tr>
      <td>Event 1</td>
      <td>Coimbatore</td>
      <td>2024-07-02</td>
      <td>10:00 AM</td>
      <td>$500</td>
      <td>
        <span className="action-icon update-icon">&#9998;</span>
        <span className="action-icon delete-icon">&#128465;</span>
      </td>
    </tr><tr>
    <td>Event 2</td>
    <td>Chennai</td>
    <td>2024-08-30</td>
    <td>10:00 AM</td>
    <td>$500</td>
    <td>
      <span className="action-icon update-icon">&#9998;</span>
      <span className="action-icon delete-icon">&#128465;</span>
    </td>
  </tr><tr>
  <td>Event 3</td>
  <td>Trichy</td>
  <td>2024-05-25</td>
  <td>10:00 AM</td>
  <td>$500</td>
  <td>
    <span className="action-icon update-icon">&#9998;</span>
    <span className="action-icon delete-icon">&#128465;</span>
  </td>
</tr><tr>
<td>Event 4</td>
<td>Madurai</td>
<td>2024-05-07</td>
<td>10:00 AM</td>
<td>$500</td>
<td>
  <span className="action-icon update-icon">&#9998;</span>
  <span className="action-icon delete-icon">&#128465;</span>
</td>
</tr>
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default ViewBookedevent;