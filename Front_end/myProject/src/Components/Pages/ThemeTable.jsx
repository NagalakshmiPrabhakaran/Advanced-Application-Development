import React from 'react'

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
            <th>Baloon</th>
            <th>Date</th>
            <th>Colour</th>
            <th>Amount</th>
            
          </tr>
        </thead>
        <tfoot>
        <tr>
        <th>Id</th>
            <th>Theme Name</th>
            <th>Baloon</th>
            <th>Date</th>
            <th>Start date</th>
            <th>Amount</th>
            
          </tr>
        </tfoot>
        <tbody>
          <tr>
          <td>1</td>
          <td>Theme Blue</td>
          <td>Yes</td>
          <td>2011/04/25</td>
          <td>Blue</td>
            <td>$320,800</td>
          </tr>
          
          <tr>
          <td>2</td>
            <td>Circus</td>
            <td>Yes</td>
            
            <td>2012/03/29</td>
            <td>Multi Colour</td>
            <td>$433,060</td>
          </tr>
          <tr>
          <td>3</td>
            <td>OutSpace</td>
            <td>Yes</td>
            
            <td>2008/11/28</td>
            <td>Pink</td>
            <td>$162,700</td>
          </tr>
          
         
        </tbody>
      </table>
    </div>
  </div>
    </div>
  )
}

export default ThemeTable
