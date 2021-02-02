import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

class PersonTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Pharmacist</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Unemployed</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Failing actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Unqualified Teaching Assistant</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Table