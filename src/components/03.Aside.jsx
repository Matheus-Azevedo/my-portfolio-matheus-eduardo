import React, { Component } from "react"

export default class Aside extends Component {
  render() {
    return (
      <aside className="aside box has-text-link">
        <div className="contact-content">
          <a href = "https://matheuseduardo.jp@gmail.com">
            <img className="contact-img" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="google" target="_blank" />
          </a>
          <a href="https://www.linkedin.com/in/matheuseduardosousaazevedo" target="blank">
            <img className="contact-img" src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="linkedIn" target="_blank" />
          </a>
          <a href="https://github.com/Matheus-Azevedo" target="blank">
            <img className="contact-img" src="https://img.shields.io/badge/-GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt="github" target="_blank" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5583986401614&text=Ol%C3%A1%2C%20Matheus%20Eduardo.%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20entrar%20em%20contato%20com%20voc%C3%AA." target="blank"> 
            <img className="contact-img" src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="whatsapp" target="_blank" />
          </a>
        </div>
      </aside>
    )
  }
}
