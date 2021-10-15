import React from 'react'
import twitter from '../../img/twitter.svg'
import './styles.css'
import'./stylesMobile.css'

const TwittButton = () => (
    <div className="social-twitter">
        <a href="/"><img src={twitter} alt=""/></a>
    </div>
)

export default TwittButton