import React from 'react';
import './gallery.css';

function gallery() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">View<span> Our Galleria</span></h1>
            <div className="uk-position-relative" data-uk-slideshow="ratio: 5:5; autoplay: true; autoplay-interval: 2500; finite: false;  min-height: 350; max-height: 600; animation: fade; pause-on-hover: true;">
                <ul className="uk-slideshow-items custom-slideshow-items">
                    <li>
                        <img className='' src="https://img.freepik.com/premium-photo/waiter-serving-food-guests-catering-service-wedding-welcome-food-fruits-skewers-canapes-welcome-buffet-wedding-reception_115318-4952.jpg?w=740" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/premium-photo/food-plate-background-waiter-customers_186673-3861.jpg?w=740" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/premium-photo/scooping-food-catering-dinner-time_41969-1870.jpg?w=740" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/premium-photo/scooping-food_41969-53.jpg?w=740" alt="" data-uk-cover/>
                    </li>
                </ul>
                <div className="uk-position-bottom-center uk-position-small">
                    <ul className="uk-thumbnav">
                        <li uk-slideshow-item="0">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/premium-photo/waiter-serving-food-guests-catering-service-wedding-welcome-food-fruits-skewers-canapes-welcome-buffet-wedding-reception_115318-4952.jpg?w=740" width="60" height="60" alt="" />
                            </a>
                        </li>
                        <li uk-slideshow-item="1">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/premium-photo/food-plate-background-waiter-customers_186673-3861.jpg?w=740" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="2">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/premium-photo/scooping-food-catering-dinner-time_41969-1870.jpg?w=740" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="3">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/premium-photo/scooping-food_41969-53.jpg?w=740" width="60" height="60" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default gallery