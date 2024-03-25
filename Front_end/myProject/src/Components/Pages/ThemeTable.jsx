import React from 'react'
import { Link } from 'react-router-dom'
const ThemeTable = () => {
  return (
      <div>
      <br/>
      <br/>
      <h2 className='head'>Theme Details</h2>
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
            <th> Theme Name</th>
            <th>Addons</th>
            <th>Amount</th>
            <th>Actions</th>
            
          </tr>
        </thead>
        <tfoot>
        <tr>
        <th>Id</th>
            <th>Theme Name</th>
            <th>Addons</th>
            <th>Amount</th>
            <th>Actions</th>
            
          </tr>
        </tfoot>
        <tbody>
          <tr>
          <td>1</td>
          <td>Theme Blue</td>
          <td>Pool Party</td>
            <td>11500</td>
            
          </tr>
          
          <tr>
          <td>2</td>
            <td>Circus</td>
            <td>Multi Chocolate</td>
            <td>9000</td>
          </tr>
          <tr>
          <td>3</td>
            <td>OutSpace</td>
            <td>Tent Effect</td>
            <td>10200</td>
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
