import React, { Component } from 'react';
import Header from '../components/01.Header';
import Main from '../components/02.Main';
import Aside from '../components/03.Aside'
import Footer from '../components/04.Footer';

export default class About extends Component {
  state ={
    content: ''
  }

  render() {
    return (
      <div className="high-container background-img">
        <Header />
        <Main />
        <Aside />
        <Footer />
      </div>
    )
  }
}
