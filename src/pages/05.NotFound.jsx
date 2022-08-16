import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <span>Ué, cadê as coisas?</span>
        <img id="not-found-img" src="https://cdn.dicionariopopular.com/imagens/giphy-1.gif" alt="" srcset="" />
        <span>Errou o link?</span>
        <span>Volta lá pra Home.</span>
        <Link
          to="/"
          >
          <button>Home</button>
        </Link>
      </div>
    )
  }
}
