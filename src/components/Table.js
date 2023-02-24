import Table from 'react-bootstrap/Table';
import '../styles/components/Table.css';
import React from 'react';

function BasicExample() {
  return (
    <div class="table-container">
      <Table striped bordered hover id="pricing-table">
        <thead>
          <tr>
            <th>Diameter</th>
            <th>Finish</th>
            <th>Style</th>
            <th>Estimated cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>4</td>
            <td>Standard</td>
            <td>Classic</td>
            <td>£12000</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Standard</td>
            <td>Modern</td>
            <td>£15999</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Normal</td>
            <td>Contemporary</td>
            <td>£29995</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BasicExample;
