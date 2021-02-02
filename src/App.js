import React, {Component} from 'react'
import './App.scss'
import PersonTable from './PersonTable'

class App extends React.Component {
    render() {
      return (
        <div className="container">
          <PersonTable/>
        </div>
      )
    }
  }

  export default App