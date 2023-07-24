// HowMuch.js

import React from 'react';

const HowMuch = () => {
  return (
    <div>
      <h2>How Much?</h2>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Price</th>
            <th>Contract</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website Design</td>
            <td>$1000</td>
            <td>3 months</td>
          </tr>
          <tr>
            <td>Website Development</td>
            <td>$1500</td>
            <td>4 months</td>
          </tr>
          {/* Add more rows for other services */}
        </tbody>
      </table>
    </div>
  );
};

export default HowMuch;
