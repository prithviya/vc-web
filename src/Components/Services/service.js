import React from 'react';
import './service.css';
// import services from '../../Assets/img/about.png';
import Images from '../../Constant/assets';

function service() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className="uk-container">
            <h1 className='title' data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">What <span>We do ?</span></h1>
            <div className="uk-child-width-1-4@m uk-grid-small uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card">
                        <ul className="c-services">
                            <li className="c-services__item">
                                <img src= { Images.SER_IMG_1 } alt='Snacky Snacks'/>
                                <h3 className='uk-margin-top'>Institute Catering</h3>
                                <p className='uk-text-justify'>
                                Make your college events a grand success with our catering services within your funds.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card">
                        <ul className="c-services">
                            <li className="c-services__item">
                                <img src= { Images.SER_IMG_2 } alt='Grab a Meal'/>
                                <h3 className='uk-margin-top'>Industrial Catering</h3>
                                <p className='uk-text-justify'>
                                Order yummy food of your choice for your grand functions and celebrations at the lowest price.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card">
                        <ul className="c-services">
                            <li className="c-services__item">
                                <img src= { Images.SER_IMG_3 } alt='Masala Mela'/>
                                <h3 className='uk-margin-top'>Hospital Catering</h3>
                                <p className='uk-text-justify'>
                                Let us take care of your patient's health through our carefully prepared diet menu.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card">
                        <ul className="c-services">
                            <li className="c-services__item">
                                <img src= { Images.SER_IMG_4 }  alt='Treat'/>
                                <h3 className='uk-margin-top'>Outdoor Catering</h3>
                                <p className='uk-text-justify'>
                                Enjoy our selective food menu within your budget. We cater all varieties of cuisine, desserts etc.
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