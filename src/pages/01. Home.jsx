import React, { Component } from 'react';
import Header from '../components/01.Header';
import Main from '../components/02.Main';
import Aside from '../components/03.Aside';
import Footer from '../components/04.Footer';

export default class Home extends Component {
  content = () => {
    return (
      <div className='home-content content'>
        <h1>Primeiramente seja Bem Vindo!</h1>
        <h3>Me chamo Matheus Eduardo,</h3>
        <ul>
          <li>Sou bacharel em Ciência da Computação com MBA Gestão Empresarial;</li>
          <br/>
          <li>Já trabalhei na área de Logística e Segurança Privada como operador de campo da transportadora multinacional Brink's, atuando em diversas funções entre elas a manutenção técnica em cofres eltrônicos e chefe de guarnição;</li>
          <br/>
          <li>Todo este background me deu um conhecimento bastante diversificado sobre a indústria e insights poderosos para aplicação de tecnologias;</li>
          <br/>
          <li>Hoje faço parte do corpo estudantil da Trybe e procuro desenvolver hards skills em Desenvolvimento Web para reforçar meu expertise e promover soluções;</li>
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
