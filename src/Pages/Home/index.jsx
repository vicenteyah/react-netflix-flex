import React from 'react'
import cancel_devices from '../../img/cancel-devices.png'
import arrow from '../../img/arrow.svg'
import './styles.css'
import './stylesMobile.css'

const Home = () => (
    <section className="section-hero">
        <div className="section-hero-content">
            <p>
                Si Piensas Que Netflix No Es Lo Tuyo, No Hay Problema. Sin Compromisos, Cancela Online Cuando Quieras.
            </p>
            <button className="btnPrimary">
                <span>UNIRTE AHORA</span><img src={arrow} alt="arrow"/>
            </button>
        </div>
        <div className="section-content-item">
            <figure>
                <img src={cancel_devices} alt="cancel devices"/>
            </figure>
        </div>
    </section>
)

export default Home