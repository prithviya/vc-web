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
                                We care for your health and prepare healthy food. Enjoy our catering services within your funds and have a healthy college life.
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
                                Working staff need a sound physique and mind. Order the yummy healthy food for your workforce at your desired price.
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
                                Let us take care of your patient's health through our carefully prepared diet menu and find them hale and healthy. 
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
                                Enjoy our selective food menu within your budget. We cater all varieties of cuisine, desserts and snacks.
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