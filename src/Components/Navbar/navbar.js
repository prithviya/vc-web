import React from 'react';
import './navbar.css';
import { Link } from "react-scroll";
import Images from '../../Constant/assets';

function navbar() {
  return (
    <div>
         <div className="uk-alert-warning uk-margin-remove-bottom uk-padding-remove uk-visible@m" data-uk-alert>
            <div className='uk-flex-right uk-flex'>
                <a href='mailto:vinayaka.caterers@gmail.com' className='uk-text-warning uk-margin-medium-right'>
                    <span><i className="uil uil-at"></i> vinayaka.caterers@gmail.com</span> 
                </a>
                <a href='tel:+9600033550' className='uk-text-warning uk-margin-medium-right'>
                    <span>
                        <i className="uil uil-phone"></i>  96000 33550
                    </span> 
                </a>
            </div>
        </div>
        <nav className="uk-navbar-container" data-uk-navbar>
            <div className="uk-navbar-left uk-margin-medium-left">
                <ul className="uk-navbar-nav">
                    <li className="uk-active">
                        <a href="/#">
                            <img src={Images.LOGO} height='80px'/>
                        </a>
                    </li>                            
                </ul>
            </div>
            <div className="uk-navbar-right uk-margin-medium-right">
                <ul className="uk-navbar-nav">
                    <li className="uk-visible@m">
                        <Link to="home" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li className="uk-visible@m">
                        <Link to="about" spy={true} smooth={true}>About</Link>
                    </li>
                    <li className="uk-visible@m">
                        <Link to="services" spy={true} smooth={true}>Services</Link>
                    </li>
                    <li className="uk-visible@m">
                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                    </li>
                    <li className='uk-hidden@m'>
                        <a className="uk-margin-small-right" uk-toggle="target: #offcanvas-nav-primary">
                            <img src={ Images.MENU } width={'50px'} height={'50px'}/>
                        </a>
                        <div id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                            <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                                <ul className="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
                                    <li>
                                        <Link to="home" spy={true} smooth={true}>Home</Link>
                                    </li>
                                    <li>
                                        <Link to="about" spy={true} smooth={true}>About</Link>
                                    </li>
                                    <li>
                                        <Link to="services" spy={true} smooth={true}>Services</Link>
                                    </li>
                                    <li>
                                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default navbar