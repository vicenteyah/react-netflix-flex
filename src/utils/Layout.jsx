import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer'

const Layout = (props) => (
    <>
        <Header/>
        {props.children}
        <Footer/>
    </>
)

export default Layout