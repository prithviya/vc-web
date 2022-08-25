import React from 'react';
import './test.css';


function test() {
  return (
    <div className='uk-section custom-test-section uk-padding-remove-bottom'>
        <div className='uk-container'>
            <h1 className='title'><span>your opinion</span> matters </h1>
            <div class="uk-text-center" data-uk-grid>
                <div class="uk-width-1-4@m">
                    <div class="uk-card"></div>
                </div>
                <div class="uk-width-1-2@m">
                    <div data-uk-slideshow="animation: fade; autoplay-interval: 2500; autoplay: true; finite: true; min-height: 450; max-height: 550">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                            <ul class="uk-slideshow-items">
                                <li>
                                    <div class="quote-wrapper">
                                        <blockquote class="text">                            
                                            <p>
                                                sit amet lorem ipsum dolorconsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam ut.
                                            </p>
                                            <footer>
                                                – Jesse James Garrett
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                                <li>
                                    <div class="quote-wrapper">
                                        <blockquote class="text">                            
                                            <p>
                                                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet dolore magna aliqua enim ad minim veniam ut.
                                            </p>
                                            <footer>
                                                – Jesse James Garrett
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                                <li>
                                    <div class="quote-wrapper">
                                        <blockquote class="text">                            
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam ut.
                                            </p>
                                            <footer>
                                                – Jesse James Garrett
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>
                </div>
                <div class="uk-width-1-4@m">
                    <div class="uk-card"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default test