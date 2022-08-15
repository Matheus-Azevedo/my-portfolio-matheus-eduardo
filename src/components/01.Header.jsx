import React, { Component } from 'react'
import MyImage from '../img/foto.png'

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
        <section className='header-content'>
          <div>01.Header</div>
          <div>01.Header</div>
          <div>01.Header</div>
          <div>01.Header</div>
        </section>
        <section className='minha-foto'>
          <img id='minha-foto-id' src={ MyImage } alt="minha-foto" />
        </section>
      </header>
    )
  }
}
