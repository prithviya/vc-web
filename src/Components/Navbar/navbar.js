import React from 'react';
import './navbar.css';
import { Link } from "react-scroll";

function navbar() {
  return (
    <div>
       <nav class="uk-navbar-container uk-container" data-uk-navbar>
            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav">
                    <li class="uk-active">
                        <a href="#">
                            Company Name
                        </a>
                    </li>                            
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li class="">
                        <Link to="home" spy={true} smooth={true}>Home</Link>
                    </li>
                    <li class="">
                        <Link to="about" spy={true} smooth={true}>About</Link>
                    </li>
                    <li class="">
                        <Link to="services" spy={true} smooth={true}>Services</Link>
                    </li>
                    <li class="">
                        <Link to="contact" spy={true} smooth={true}>Contact</Link>
                    </li>
                </ul>

            </div>
        </nav>
    </div>
  )
}

export default navbar