import React, { Component } from 'react';
import './header.css'

export default function Header(){
    return(
        <>
        
        {/*<!-- ***** Header Area Start ***** --> */}
    <header className="header-area header-sticky">
        
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        {/*<!-- ***** Logo Start ***** --> */}
                        <a href="#" className="logo">
                            <img src="vite.svg" alt="DeviAcademy"/>
                        </a>
                        {/*<!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->*/}
                        <ul className="nav">
                            <li><a href="#welcome" className="active">Home</a></li>
                            <li><a href="#features">Learn</a></li>
                            <li><a href="#work-process">Courses</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ul>
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/*<!-- ***** Menu End ***** -->*/}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/*<!-- ***** Header Area End ***** -->*/}
        </>
    )
}