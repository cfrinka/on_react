import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Landing = () => {
  return (
    <div class="main-container">
    <div class="left">
      <div class="left-head">
        <img src="../../assets/images/thinkbubble.svg"></img>
        <p>Meu diário emocional</p>
      </div>
      <div class="text-left-align">
        <p>Uma maneira fácil, rápida e divertida de compartilhar suas emoções diárias com seu terapeuta</p>
      </div>
      <div class="text-right-align">
        <p>Ajuda para você, profissional, acompanhar seus pacientes</p>
      </div>
    </div>

    <div class="right">
      <div class="logo-image">
        <img src="../../assets/images/logo_landing.svg"></img>
      </div>
      <div class="logo-name">
        ON-Therapy
      </div>
      <div class="bottom-stuff">
        <div class="boy">
          <img src="../../assets/images/man_landing.svg"></img>
        </div>
        <div class="container-buttons">
          <button class="buttons">
            ENTRAR
          </button>
          <button class="buttons">
            CADASTRAR
          </button>
        </div>
        <div class="girl">
          <img src="../../assets/images/girl_landing.svg"></img>
        </div>
      </div>

    </div>

  </div>
  )

}

export default Landing