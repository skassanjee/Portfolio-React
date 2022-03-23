import React from 'react'
import './Footer.css'
import github from '../../Assets/images/git.png'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
        <a href="https://github.com/skassanjee" alt="Sahil's github page">
          <div>
            <img src={github}/>
          </div>
        </a>
        <div>Made by SK</div>
      </footer>
    </div>
  )
}

export default Footer