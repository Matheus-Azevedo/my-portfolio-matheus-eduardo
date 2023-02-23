import React, { Component } from 'react'

export default class Aside extends Component {
  render() {
    return (
      <aside className='aside box has-text-link'>
        <div className='contact-content'>
          <h1 className='title is-3 has-text-link'>CONTATO</h1>
            <div>
              <a href = "https://matheuseduardo.jp@gmail.com">
                <img className='contact-img' src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt='google' target="_blank" />
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/matheuseduardosousaazevedo" target="blank">
                <img className='contact-img' src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt='linkedIn' target="_blank" />
              </a>
            </div>
            <div>
              <a href="https://github.com/Matheus-Azevedo" target="blank">
                <img className='contact-img' src="https://img.shields.io/badge/-GitHub-000000?style=for-the-badge&logo=github&logoColor=white" alt='github' target="_blank" />
              </a>
            </div>
        </div>
      </aside>
    )
  }
}
