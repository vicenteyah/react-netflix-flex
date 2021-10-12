import React from 'react'
import arrow from '../../img/arrow.svg'
import netflix_tv from '../../img/netflix-tv.png'
import netflix_mobile from '../../img/netflix-mobile.png'
import netflix_laptop from '../../img/netflix-laptop.png'
import './styles.css'

const Devices = () => (
    <section className="section-dev">
        <div class="devices-header">
            <p>
                Ve Películas Y Programas De TV Cuando Y Donde Quieras, Personalizados Para Ti.
            </p>
            <button class="btnPrimary btn-arrow">
                <span>UNIRTE AHORA</span><img src={arrow} alt="arrow"/>
            </button>
        </div>
        <div class="devices-listed">
            <div class="devices-itm">
                <figure>
                    <img src={netflix_tv} alt="netflix tv"/>
                </figure>
                <p class="devices-item-title">Ve Netflix en tu TV</p>
                <p class="devices-item-subtitle">Smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y
                más.</p>
            </div>
        <div class="divDevicesItem">
            <figure>
                <img src={netflix_mobile} alt="mobile"/>
            </figure>
            <p class="devices-item-title">Disfruta Al Instante O Descarga Videos Para Más Tarde</p>
            <p class="devices-item-subtitle">Disponible en tu teléfono o tablet, vayas donde vayas</p>
        </div>
        <div class="divDevicesItem">
            <figure>
                <img src={netflix_laptop} alt="laptop"/>
            </figure>
            <p class="devices-item-title">Usa cualquier computadora</p>
            <p class="devices-item-subtitle">Ve directamente en Netflix.com</p>
        </div>
    </div>
    </section>
)

export default Devices