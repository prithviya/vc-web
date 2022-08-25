import React from 'react';
import './navbar.css'

function navbar() {
  return (
    <div>
        <div className='uk-section-primary uk-preserve-color'>
            <div data-uk-sticky='start: 200; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent'>
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
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li class="">
                                <a href="#">
                                    About
                                </a>
                            </li>
                            <li class="">
                                <a href="#">
                                    Services
                                </a>
                            </li>
                            <li class="">
                                <a href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default navbar