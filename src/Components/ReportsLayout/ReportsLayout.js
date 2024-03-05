import React, { useState } from 'react';
import './ReportsLayout.css';

export default function ReportsLayout() {  
    return (
      <div className="container">
        <h2>Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>View Report</th>
              <th>Download Report</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dr. John Doe</td>
              <td>Cardiology</td>
              <td>
                  <button variant="primary" size='sm'>View Report</button>
              </td>
              <td>
                  <button variant="primary" size='sm'>Download Report</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dr. Jane Smith</td>
              <td>Dermatology</td>
              <td>
                <button variant="primary" disabled size='sm'>View Report</button>
              </td>
              <td>
                <button variant="primary" disabled size='sm'>Download Report</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }