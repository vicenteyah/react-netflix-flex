import React from 'react'
import world from '../../img/world.svg'
import './styles.css'
const Footer = () => (
    <footer>
    <div className="footer-title">
        <p>¿Preguntas? Llama al 01800-265-0161</p>
    </div>
    <div className="foot-cols">
        <div className="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
        <div className="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
        <div className="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
    </div>
    <div className="foot-regions">
        <button className="btn-region"><img src={world} alt=""/>Español</button>
        <a href="/">Netflix México</a>
    </div>
   </footer>
)

export default Footer