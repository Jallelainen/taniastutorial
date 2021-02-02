import React, {Component} from 'react'
import Table from 'react-bootstrap/Table'

const TableHeader = () => {
  return (
    <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
  ) 
}

const TableBody = () => {
  return (
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
  )
}

class PersonTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <TableHeader />
        <TableBody />
      </Table>
    )
  }
}

export default Table