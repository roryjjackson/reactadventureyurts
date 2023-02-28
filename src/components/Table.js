import Table from 'react-bootstrap/Table';
import '../styles/components/Table.css';
import React from 'react';

function BasicExample() {
  return (
    <div class="table-container">
      <Table striped bordered hover id="pricing-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Diameter</th>
            <th>Spec</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Basic wooden yurt</td>
            <td>4m</td>
            <td>See here</td>
            <td>£9995 +VAT</td>
          </tr>
          <tr>
            <td>Structural base</td>
            <td>4.2m</td>
            <td>See here</td>
            <td>£29995 +VAT</td>
          </tr>
        </tbody>
      </Table>
      <h5 id="spec-h5" >For the full specification, please click below</h5>
      <button id="extras-btn">Specification</button>
    </div>
  );
}

export default BasicExample;
