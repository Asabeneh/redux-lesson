import React, { Component } from 'react'

import { connect } from 'react-redux'
import { addOne, minusOne } from './store/actions'

import './App.css'

class App extends Component {
  render() {
    console.log('lets see the props', this.props)
    return (
      <div>
        <h1>Redux Lesson</h1>
        <h2>{this.props.count}</h2>
        <button onClick={this.props.addOne}>Add One</button>
        <button onClick={this.props.minusOne}>Minus One</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state
})
const mapActionToProps = dispatch => ({

    addOne: () => dispatch(addOne),
    minusOne: () => dispatch(minusOne)
  
})

export default connect(mapStateToProps, mapActionToProps)(App)
