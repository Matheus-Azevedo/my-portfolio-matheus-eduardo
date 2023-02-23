import React, { Component } from 'react';
import Header from '../components/01.Header';
import Main from '../components/02.Main';
import Aside from '../components/03.Aside';
import Footer from '../components/04.Footer';
import { homeInformation01, homeInformation02, homeInformation03 } from '../database/01.home.info';

export default class Home extends Component {
  content = () => {
    return (
      <div className='content has-text-link home-content'>
        <div>
          <h1 className='title is-3 has-text-link'>Primeiramente seja bem vindo!</h1>
          <h3 className='title is-5 has-text-link'>Me chamo Matheus Eduardo</h3>
            { homeInformation01 }
            <br/>
            { homeInformation02 }
            <br/>  
            { homeInformation03 }
        </div>
        <br/>
        <div className='stack-content'>
          <h3 className='title is-3 has-text-link'>STACKS</h3>
          <h3 className='title is-5 has-text-link'>Primária</h3>
            <div className='icons-content'>          
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" height="50" width="50"/>
            </div>
          <h3 className='title is-5 has-text-link'>Secundária</h3>
            <div className='icons-content'>          
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg" height="50" width="50"/>
              <img className='icons' alt='icon-tool' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" height="50" width="50"/>
            </div>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <div className="high-container background-img">
        <Header />
        <Main content={ this.content() } />
        <Aside />
        <Footer />
      </div>
    )
  }
}
