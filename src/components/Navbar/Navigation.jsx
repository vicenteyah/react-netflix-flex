import React from 'react'
import devices from '../../img/devices.svg'
import prices from '../../img/price.svg'
import cancel from '../../img/cancel.svg'
import {Link} from '@reach/router'
import './styles.css'
import './NavMobile.css'

const Navigation = ({navtxt1,navtxt2,navtxt3}) => (
    <nav>
        <Link className="nav-item" to="/">
            <img src={cancel} alt="cancel"/>
            <p>{navtxt1}</p>
        </Link>
        <Link className="nav-item" to="/devices">
            <img src={devices} alt="device"/>
            <p>{navtxt2}</p>
        </Link>
        <Link className="nav-item" to="/prices">
            <img src={prices} alt="price"/>
            <p>{navtxt3}</p>
        </Link>
    </nav>
)

export default Navigation