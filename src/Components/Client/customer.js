import React from 'react';
import Images from '../../Constant/assets';

function customer() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='title'> Our Valuable <span>Customers</span></h1>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                    <div className="uk-card  uk-card-body" data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                        <img src="https://img.icons8.com/ios-filled/100/FD7E14/successful-delivery.png" alt='icon'/>
                        <h1>
                            Our Customers
                        </h1>
                        <p className='text-black uk-text-justify'>
                        Vinayaka Caterers has a legacy of catering delicious food to several Colleges, Universities, Hospitals and Industries. We ensure that our customers are served best in terms of quality, which is what has made them enjoy an unforgettable food experience. Customers have been served amazing food and their positive feedback has motivated us to continue doing our best.
                        </p>
                    </div>
                </div>
                <div>
                    <div id='home-page' data-uk-slideshow="ratio: 6:3; autoplay: true; autoplay-interval: 2000; finite: false; min-height: 430; max-height: 600; animation: slide; pause-on-hover: true;">
                        <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >
                            <ul className="uk-slideshow-items">
                                <li>
                                    <div>
                                        <img src={ Images.CUSTOMER } alt='customer_logo' width={'100%'}/>
                                    </div>                  
                                </li>
                                <li>
                                    <div>
                                        <img src={ Images.CUSTOMER_1 } alt='valuable_customer' width={'100%'}/>
                                    </div>
                                </li>              
                            </ul>
                        </div>            
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default customer