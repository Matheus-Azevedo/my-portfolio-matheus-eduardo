import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    const { homeContent } = this.props;
    return (
      <main className='main box'>
        { homeContent && homeContent }
      </main>
    )
  }
}
