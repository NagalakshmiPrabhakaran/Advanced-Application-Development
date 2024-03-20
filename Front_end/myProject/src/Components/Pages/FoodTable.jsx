import React from 'react'

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
            <th>Food Name</th>
            <th>Veg or Nonveg</th>
            <th>Quantity</th>
            <th>Amount Per Item</th>
            
            <th>Total Amount</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
          <th>Food Name</th>
          <th>Veg or Nonveg</th>
          <th>Quantity</th>
          <th>Amount Per Item</th>
          <th>Total Amount</th>
          </tr>
        </tfoot>
        <tbody>
          <tr>
            <td>Celemin</td>
            <td>Non Veg</td>
            <td>50</td>
            <td>350</td>
            <td>17500</td>
            
          </tr>
         
          <tr>
            <td>Smoked salmon</td>
            <td>Non Veg</td>
            <td>50</td>
            <td>350</td>
            <td>17500</td>
          </tr>
          <tr>
            <td>Taco</td>
            <td>Veg</td>
            <td>50</td>
            <td>350</td>
            <td>17500</td>
            
          </tr>
          
          
           
         
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default ThemeTable
