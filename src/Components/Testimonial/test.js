import React from 'react';
import './test.css';


function test() {
  return (
    <div className='uk-section custom-test-section uk-padding-remove-bottom'>
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500"><span>your opinion</span> matters </h1>
            <div className="uk-text-center" data-uk-grid>
                <div className="uk-width-1-4@m">
                    <div className="uk-card"></div>
                </div>
                <div className="uk-width-1-2@m">
                    <div data-uk-slideshow="animation: fade; autoplay: true; autoplay-interval: 2300; finite: false; min-height: 450; max-height: 550">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">
                            <ul className="uk-slideshow-items">
                                <li>
                                    <div className="quote-wrapper">
                                        <blockquote className="text">                            
                                            <p className='text-black'>
                                            One of the finest caterers in the city! You don't wanna miss this place! I tried both brunch and dinner, and they were excellent.
                                            </p>
                                            <footer>
                                                – Rajesh Kumar
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                                <li>
                                    <div className="quote-wrapper">
                                        <blockquote className="text">                            
                                            <p className='text-black'>
                                            The food was absolutely delicious. Thanks to the young owner and her hospitality. She does the best to serve us delicious food. 
                                            </p>
                                            <footer>
                                                – Santhosh 
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                                <li>
                                    <div className="quote-wrapper">
                                        <blockquote className="text">                            
                                            <p className='text-black'>
                                            The food was amazing. The presentation was perfect and quality of the food was just as good. The customer service is appreciable Overall, excellent service.  
                                            </p>
                                            <footer>
                                                – Gowtham Sivaraj
                                            </footer>                            
                                        </blockquote>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <ul className="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>
                    </div>
                </div>
                <div className="uk-width-1-4@m">
                    <div className="uk-card"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default test