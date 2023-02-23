import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    const { content } = this.props;
    return (
      <main className='main box'>
        { content && content }
      </main>
    )
  }
}
