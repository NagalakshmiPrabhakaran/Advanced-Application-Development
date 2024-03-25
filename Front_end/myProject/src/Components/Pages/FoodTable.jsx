import React from 'react'
import { Link } from 'react-router-dom'


const ThemeTable = () => {
  return (
      <div>
      
      <h2 className='head'>Food Details</h2>
      <br/>
    <div className="card-body">
    <div className="table-responsive">
      <table
        className="table table-bordered"
        id="dataTable"
        width="100%"
        cellSpacing={0}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Veg or Nonveg</th>
            <th>Item 1 Name</th>
            <th>Item 2 Name</th>
            <th>Item 3 Name</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
          <th>Id</th>
          <th>Veg or Nonveg</th>
          <th>Item 1 Name</th>
          <th>Item 2 Name</th>
          <th>Item 3 Name</th>
          <th>Price</th>
          <th>Actions</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>1</td>
            <td>Non Veg</td>
            <td>Celemin</td>
            <td>Smoked salmon</td>
            <td>Ice Cream</td>
            <td>5000</td>
            
          </tr>
         
          <tr>
            <td>2</td>
            <td>Non Veg</td>
            <td>Biriyani</td>
            <td>Chicken grill</td>
            <td>Bronie</td>
            <td>3500</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Veg</td>
            <td>Paneer Rice</td>
            <td>Mushroom</td>
            <td>Biscuit Pudding</td>
            <td>7500</td>
            
          </tr>
          
          
           
         
        </tbody>
      </table>
    </div>
  </div>
  <button> <Link to ="/Admin">Back </Link></button>
    </div>
  )
}

export default ThemeTable
