import React, { Component } from 'react'

export default class Test extends Component {

    state = {
        title : '' 
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(data => this.setState({
      title : data.title
  }))
    }

  render() {

    const { title } = this.state;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    )
  }
}
