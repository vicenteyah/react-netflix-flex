import React from 'react'
import Navigation from '../Navbar/Navigation'
import logo from '../../img/logo_netflix.png'
import arrow from '../../img/arrow.svg'
import './Styles.css'
import './stylesMobile.css'

const Header = () => (
    <header className="header">
        <div className="container">
            <div className="login-container">
                <button className="btnPrimary" type="submit">Iniciar Sesión</button>
            </div>
            <div className="headerSection">
                <div>
                    <img src={logo} alt="netflix logo"/>
                </div>
                <div className="headerSectionText">
                    <h1>Tu próxima historia, ahora</h1>
                    <h2>Disfruta Donde Quieras, Cancela Donde Quieras</h2>
                </div>
                <button className="btn-hero btn-arrow">
                    <strong>UNIRTE AHORA</strong><img src={arrow} alt='arrow'/>
                </button>
            </div>
        </div>
        <Navigation 
            navtxt1="Sin compromisos, cancela online cuando quieras"
            navtxt2="Ve desde donde quieras"
            navtxt3="Elige tu precio"
        />
    </header>
)

export default Header