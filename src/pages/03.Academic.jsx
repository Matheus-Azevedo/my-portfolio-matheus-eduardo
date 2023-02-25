import React, { Component } from "react";
import Header from "../components/01.Header";
import Main from "../components/02.Main";
import Aside from "../components/03.Aside";
import Footer from "../components/04.Footer";
import { academicInfo01, academicInfo02, academicInfo03, academicInfo04, academicInfo05, academicInfo06, academicInfo07, academicInfo08, academicInfo09, academicInfo10 } from "../database/03.academic.info";
import Certificado01 from "../img/certificados/certificado01.jpg";
import Certificado02 from "../img/certificados/certificado02.jpeg";
import Certificado03 from "../img/certificados/certificado03.jpg";
import Certificado04 from "../img/certificados/certificado04.png";
import Certificado05 from "../img/certificados/certificado05.png";
import Certificado06 from "../img/certificados/certificado06.png";
import Certificado07 from "../img/certificados/certificado07.png";

export default class Academic extends Component {
  content = () => {
    return (
      <section className="content has-text-link">
        <h1 className="title is-3 has-text-link text-align-center">FORMAÇÃO</h1>
        <div>
          <h2 className="title is-4 has-text-link text-align-center" >Bacharelado em Ciência da Computação - Unipê (ago de 2009 - dez de 2015)</h2>
          <p>{ academicInfo01 }</p>
          <p>{ academicInfo02 }</p>
          <p>{ academicInfo03 }</p>
          <br />
        </div>
        <div>
          <h2 className="title is-4 has-text-link text-align-center">Executive MBA em Gestão Empresarial - Unipê (out de 2016 - jul de 2018)</h2>
          <p>{ academicInfo04 }</p>
          <p>{ academicInfo05 }</p>
          <p>{ academicInfo06 }</p>
          <br />
        </div>
        <div>
          <h2 className="title is-4 has-text-link text-align-center">Desenvolvedor Web - Trybe (abr de 2022 - abr de 2023)</h2>
          <p>{ academicInfo07 }</p>
          <p>{ academicInfo08 }</p>
          <p>{ academicInfo09 }</p>
          <p>{ academicInfo10 }</p>
          <br />
        </div>
        <h1 className="title is-3 has-text-link text-align-center">CERTIFICADOS</h1>
        {/* coloque aqui as imagens dos certificados */}
        <div className="certificados-style">
          <img id="certificado03" className="imagens-style" src={ Certificado03 } alt="certificado03" />
          <img id="certificado01" className="imagens-style" src={ Certificado01 } alt="certificado01" />
          <img id="certificado05" className="imagens-style" src={ Certificado05 } alt="certificado05" />
          <img id="certificado06" className="imagens-style" src={ Certificado06 } alt="certificado06" />
          <img id="certificado04" className="imagens-style" src={ Certificado04 } alt="certificado04" />
          <img id="certificado07" className="imagens-style" src={ Certificado07 } alt="certificado07" />
          <img id="certificado02" className="imagens-style" src={ Certificado02 } alt="certificado02" />
        </div>
      </section>
    )
  }

  render() {
    return (
      <div className="high-container background-img">
        <Header />
        <Main content = { this.content() } />
        <Aside />
        <Footer />
      </div>
    )
  }
}
