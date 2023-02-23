import React, { Component } from "react";
import Header from "../components/01.Header";
import Main from "../components/02.Main";
import Aside from "../components/03.Aside"
import Footer from "../components/04.Footer";
import BrinksPhoto from "../img/brinks.jpg";
import MyHomeOfficer from "../img/my-home-officer.jpeg";
import { aboutInformation01, aboutInformation02, aboutInformation03, aboutInformation04, aboutInformation05, aboutInformation06, aboutInformation07, aboutInformation08, aboutInformation09 } from "../database/02.about.info";

export default class About extends Component {
  content = () => {
    return (
      <div className="content has-text-link">
        <h1 className="title is-3 has-text-link">Um pouco sobre mim</h1>
        <div>
          { aboutInformation01 }
        </div>
        <br />
        <div>
          { aboutInformation02 }
        </div>
        <br />
        <div>
          { aboutInformation03 }
        </div>
        <br />
        <div>
          { aboutInformation04 }
          <figure>
            <br />
            <img id="brinks-photo" src={ BrinksPhoto } alt="brinks"  width={ 500 } height={ 500 } />
            <figcaption text-align="center">Fonte: <a href="https://revistasegurancaeletronica.com.br/brinks-faz-lancamento-global-focado-em-pequenos-varejistas/">link para referência</a></figcaption>
          </figure>
        </div>
        <br />
        <div>
          { aboutInformation06 }
        </div>
        <br />
        <div>
          { aboutInformation05 }
        </div>
        <br />
        <div>
          { aboutInformation07 }
        </div>
        <br />
        <div>
          { aboutInformation08 }
        </div>
        <br />
        <div>
          { aboutInformation09 }
          <figure>
            <br />
            <img id="my-home-officer" src={ MyHomeOfficer } alt="home-officer" width={ 500 } height={ 500 } />
            <figcaption>Fonte: Acervo pessoal - Meu home officer</figcaption>
          </figure>
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
