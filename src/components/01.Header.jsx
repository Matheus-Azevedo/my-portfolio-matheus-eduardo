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
              Desenvolvedor Backend
            </h4>
            <h4>
              IBM Z Xplore Advanced
            </h4>
        </section>
        <section className='header-content'>
          <Link
            to="/"
            >
            <button className="button is-link">HOME</button>
          </Link>
          <Link
            to="/about"
            >
            <button className="button is-link">SOBRE</button>
          </Link><Link
            to="/academic"
            >
            <button  className="button is-link">ACADÊMICO</button>
          </Link><Link
            to="/projects"
            >
            <button className="button is-link">PROJETOS</button>
          </Link>
        </section>
      </header>
    )
  }
}
