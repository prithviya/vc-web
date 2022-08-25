import React from 'react';
import './service.css';
import services from '../../Assets/img/about.png';

function service() {
  return (
    <div className='uk-section uk-section-muted'>
        <div class="uk-container">
            <h1 className='title'><span> What We </span>do ?</h1>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Snacky Snacks</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Arab a Meal</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Meals & Bites</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Snacky Foods</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Foodie Me</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div>
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { services } />
                                <h3 className='uk-padding-small-top'>Foodie Buddy</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default service