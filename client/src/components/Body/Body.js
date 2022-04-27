import React from "react";
import './Body.css'
import axios from 'axios'
import { useState } from "react";
import Card from "../Cards/Card/Card";
import Cards from "../Cards/Cards";


const Body = () => {

  const [sent, setSent] = useState(false)
  const [text, setText] = useState('')

  const handleSend = async() => {
    setSent(true)
    try {
      await axios.post('http://localhost:4000/send_mail', {
        text
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className="laptop-background">
        <div className="intro">
          <span className="intro-name">
            Hello. My name is Sahil. <br />
            Welcome to my Portfolio
          </span>
          <span className="intro-description">
            I am a fullstack Javascript Developer (MERN) with experience in Java
            and Python
          </span>
        </div>
      </div>

      <div className="about">
        <div className="about-word" id="about">
          About
        </div>

        <div className="about-flex">
          <div className="about-skills">
            <div>
              <span className="skills-title">Coding Skills</span>
              <ul className="skill-list">
                <li>Programming: Java, Javascript, and Python</li>
                <li>Experience Building Full Stack Javascript Applications</li>
                <li>Experience creating automation scripts in python</li>
                <li>Utilizes React JS to create single page applicatons</li>
              </ul>
            </div>
          </div>

          <div className="about-skills">
            <div>
              <span className="skills-title">Education</span>
              <ul className="skill-list">
                <li>
                  BS Biological Sciences - The University of Texas at El Paso
                </li>
                <li>
                  MS Environmental Sciences - The University of Texas at San
                  Antonio
                </li>
                <li>
                  Completed Coding Projects can be found on my Github, at the
                  end of this page or by clicking{' '}
                  <a className="git-link" href="https://github.com/skassanjee">
                     Here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div id="projects">Projects</div>
{/* 
        <div className="main">
          <ul className="cards">
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Breaking Bad App</h2>
                  <p className="card_text">
                    Created with React JS, app fetched with axios. Built using
                    modern react programming. Created with React JS, app fetched
                    with axios. Built using modern react programming.
                  </p>
                  <a href="https://breakingbad-sahil.herokuapp.com/">
                    <button className="btn card_btn"> View Live</button>
                  </a>
                </div>
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=10" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Skate shop (Current project)</h2>
                  <p className="card_text">
                    A full scale ecommerce shop developed with javascript,
                    nodejs, and mongoDB.
                  </p>
                  <a href="https://github.com/skassanjee/skateshop">
                    <button className="btn card_btn"> View Repo</button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=17" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">MT realty landing page </h2>
                  <p className="card_text">
                    Made with javascript and several libraries to display
                    content. Backend made with nodeJS
                  </p>
                  <a href="https://mtrealty.herokuapp.com">
                    <button className="btn card_btn">View Live</button>
                  </a>
                </div>
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=17" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">NodeJS Todo App</h2>
                  <p className="card_text">
                    A todo application created with javascript, html, css, and
                    nodeJS. Connected to mongoDB.
                  </p>
                  <a href="https://sahiltodo.herokuapp.com/">
                    <button className="btn card_btn">View Live</button>
                  </a>
                </div>
              </div>
            </li>

            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=2" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Personal Portfolio</h2>
                  <p className="card_text">
                    The page you are currently viewing. Made with CSS, HTML,
                    Javascript, and NodeJS.
                  </p>
                  <a href="https://github.com/skassanjee/portfolio">
                    <button className="btn card_btn">View Repo </button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=11" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Pizzeria</h2>
                  <p className="card_text">
                    A pizza shop made using Javascript, handlebars, nodeJS and
                    bootstrap.
                  </p>
                  <a href="https://sahilssp.herokuapp.com/">
                    <button className="btn card_btn">View Live</button>
                  </a>
                </div>
              </div>
            </li>
            <li className="cards_item">
              <div className="card">
                <div className="card_image">
                  <img src="https://picsum.photos/500/300/?image=5" />
                </div>
                <div className="card_content">
                  <h2 className="card_title">Java Tic Tac Toe</h2>
                  <p className="card_text">
                    A simple tic tac toe game made in Java, programmed using
                    intelliJ
                  </p>
                  <a href="https://github.com/skassanjee/javatictactoe">
                    <button className="btn card_btn">View Repo</button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
<Cards />


      
    </div>
  );
};

export default Body;
