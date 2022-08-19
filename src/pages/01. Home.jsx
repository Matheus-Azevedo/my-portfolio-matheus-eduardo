import React, { Component } from 'react';
import Header from '../components/01.Header';
import Main from '../components/02.Main';
import Aside from '../components/03.Aside';
import Footer from '../components/04.Footer';

export default class Home extends Component {
  content = () => {
    return (
      <div className='home-content content has-text-link'>
        <h1 className='has-text-link'>Primeiramente seja Bem Vindo!</h1>
        <h3 className='has-text-link'>Me chamo Matheus Eduardo,</h3>
        <ul>
          <li>Sou bacharelado em <strong className='has-text-link'>Ciência da Computação</strong> com <strong className='has-text-link'>MBA Gestão Empresarial</strong>;</li>
          <br/>
          <li>Atuei na área de <strong className='has-text-link'>Logística e Segurança Privada</strong> como operador de campo da transportadora multinacional Brink's, em diferentes funções tais como a manutenção técnica em cofres eletrônicos e chefe de guarnição;</li>
          <br/>
          <li>Todo este background me deu um conhecimento bastante diversificado sobre a indústria e insights poderosos para aplicação de tecnologias;</li>
          <br/>
          <li>Hoje faço parte do corpo estudantil da <strong className='has-text-link'>Trybe</strong> e procuro desenvolver hards skills em Desenvolvimento Web para reforçar meu expertise e promover soluções;</li>
        </ul>
        Rumo ao Full Stack!
        <br/>
        <div>
          <img alt='icon-1' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height="50" width="50"/>
          <img alt='icon-2' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height="50" width="50"/>
          <img alt='icon-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height="50" width="50"/>
          <img alt='icon-4' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" height="50" width="50"/>
          <img alt='icon-5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" height="50" width="50"/>
          <img alt='icon-6' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="50" width="50"/>
          <img alt='icon-7' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" height="50" width="50"/>
          <img alt='icon-8' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="50" width="50"/>
          <img alt='icon-9' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="50"/>
          <img alt='icon-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="50"/>
          <img alt='icon-11' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" width="50"/>
          <img alt='icon-12' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" height="50" width="50"/>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <div className="high-container background-img">
        <Header />
        <Main homeContent={ this.content() } />
        <Aside />
        <Footer />
      </div>
    )
  }
}
