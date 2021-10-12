import React from 'react'
import world from '../../img/world.svg'
import './styles.css'
const Footer = () => (
    <footer>
    <div class="footer-title">
        <p>¿Preguntas? Llama al 01800-265-0161</p>
    </div>
    <div class="foot-cols">
        <div class="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
        <div class="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
        <div class="foot-items">
            <a href="/">Preguntas frecuentes</a>
            <a href="/">Relaciones con inversionistas</a>
            <a href="/">Formas de ver</a>
            <a href="/">Información corporativa</a>
            <a href="/">Originales de Netflix</a>
        </div>
    </div>
    <div class="foot-regions">
        <button class="btn-region"><img src={world} alt=""/>Español</button>
        <a href="/">Netflix México</a>
    </div>
   </footer>
)

export default Footer