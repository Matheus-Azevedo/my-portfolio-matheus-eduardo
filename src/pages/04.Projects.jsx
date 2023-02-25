import React, { Component } from "react";
import Header from "../components/01.Header";
import Main from "../components/02.Main";
import Aside from "../components/03.Aside";
import Footer from "../components/04.Footer";

export default class Projects extends Component {
  content = () => {
    return (
      <section className="content has-text-link text-align-center">
        <h1 className="title is-3 has-text-link text-align-center">REPOSITÓRIOS</h1>
        <div className="projects-list-content">
          <div className="projects">
            <a href = "https://github.com/stars/Matheus-Azevedo/lists/star2-frontend-projects">
              <button className="button is-link is-outlined is-medium ">FRONTEND LIST</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Solar-System-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Solar</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Recipes-App-Matheus-Eduardo-and-Group-17">
              <button className="button is-link is-outlined is-medium project-box">Recipes</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-React-Testing-Library-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Library</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Trybewallet-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Trybewallet</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Trybetunes-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Trybetunes</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Tryunfo-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Tryunfo</button>
            </a>
          </div>
          <div className="projects">
            <a href="https://github.com/stars/Matheus-Azevedo/lists/star-backend-projects" target="blank">
              <button className="button is-link is-outlined is-medium">BACKEND LIST</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Trybesmith-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Trybesmith</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Talker-Manager-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Talker</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Blogs-Api-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Blogs</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Mysql-One-for-All-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Mysql 01</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Mysql-All-for-One-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Mysql 02</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Docker-Todo-List-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Docker</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Store-Manager-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Store</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Trybers-and-Dragons-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Dragons</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Car-Shop-Matheus-eduardo">
              <button className="button is-link is-outlined is-medium project-box">Car</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Mongodb-Commerce-Matheus-eduardo">
              <button className="button is-link is-outlined is-medium project-box">Mongodb</button>
            </a>
          </div>
          <div className="projects">
            <a href="https://github.com/stars/Matheus-Azevedo/lists/star-struck-fullstack-projects" target="blank">
              <button className="button is-link is-outlined is-medium">FULLSTACK LIST</button>
            </a>
            <a href = "https://github.com/Matheus-Azevedo/Project-Trybe-Futebol-Clube-Matheus-Eduardo">
              <button className="button is-link is-outlined is-medium project-box">Futebol</button>
            </a>
          </div>
        </div>
      </section>
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
