import React from 'react'
import Header from '../common/template/header'
import SideBar from '../common/template/side-bar'
import Footer from '../common/template/footer'
import Messages from '../message/messages'

export default props => (
    <div className='wrapper'>
        <Header />
        <SideBar />
        <div className='content-wrapper'>
            { props.children }
        </div>
        <Footer />
        <Messages />
    </div>
)