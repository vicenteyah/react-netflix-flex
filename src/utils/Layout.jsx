import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer'
import TwittButton from '../components/TwitterButton'
const Layout = (props) => (
    <>
        <Header/>
        <TwittButton/>
        {props.children}
        <Footer/>
    </>
)

export default Layout