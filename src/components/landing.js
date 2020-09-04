import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

const Landing = () => {
  return (
    <div className="main-container">
      <div className="left">
        <div className="think-bubble">
          <img src="../../assets/images/thinkbubble.svg"></img>
          <p>Meu diário emocional</p>
        </div>
        <div className="text-left-align">
          <p>HERE IS SOME SAMPLE TEXT TO BE CHANGED LATER</p>
        </div>
        <div className="text-right-align">
          <p>HERE IS SOME MORE TEXT TO HELP WITH THE css</p>
        </div>
      </div>


      <div className="right">
        <div className="logo-image">
          <img src="../../assets/images/logo_landing.svg"></img>
        </div>
        <div className="logo-name">
          <p>ON-Therapy</p>
        </div>
        <div className="bottom-stuff">
          <div className="boy">
            <img src="../../assets/images/man_landing.svg"></img>
          </div>
          <div className="container-buttons">
            <div className="buttons">
              ENTRAR
            </div>
            <div className="buttons">
              CADASTRAR
            </div>
          </div>
          <div className="girl">
            <img src="../../assets/images/girl_landing.svg"></img>
          </div>
        </div>

      </div>

    </div>
  )

}

export default Landing