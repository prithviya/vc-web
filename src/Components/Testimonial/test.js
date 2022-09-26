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
                    <div data-uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 2300; finite: false; min-height: 450; max-height: 550">
                        <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
                            <ul class="uk-slideshow-items">
                                <li>
                                    <div class="quote-wrapper">
                                        <blockquote class="text">                            
                                            <p className='text-black'>
                                            One of the finest caterers in the city! You don't wanna miss this place! I tried both brunch and dinner, and they were excellent.
                                            </p>
                                            <footer>
                                                – Pranav
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                                <li>
                                    <div class="quote-wrapper">
                                        <blockquote class="text">                            
                                            <p className='text-black'>
                                            The food was absolutely delicious. Thanks to the young owner and her hospitality. She does the best to serve us delicious food. 
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
                                            <p className='text-black'>
                                            The food was amazing. The presentation was perfect and quality of the food was just as good. The customer service is appreciable Overall, excellent service.  
                                            </p>
                                            <footer>
                                                – Jenifer
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