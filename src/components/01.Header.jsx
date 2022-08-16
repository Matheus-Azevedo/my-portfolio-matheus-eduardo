import React, { Component } from 'react'
import MyImage from '../img/foto.png'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className='header'>
         <section className='minha-foto'>
          <img id='minha-foto-id' src={ MyImage } alt="minha-foto" />
          <h4>
            Matheus Eduardo
          </h4>
          <h4>
            Desenvolvedor Web em React
          </h4>
        </section>
        <section className='header-content'>
          <Link
            to="/"
            >
            <button>HOME</button>
          </Link>
          <Link
            to="/About"
            >
            <button>SOBRE</button>
          </Link><Link
            to="/Professional"
            >
            <button>PROFISSONAL</button>
          </Link><Link
            to="/Comment"
            >
            <button>COMENTÁRIO</button>
          </Link>
        </section>
      </header>
    )
  }
}
