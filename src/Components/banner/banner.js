import React from 'react';
import Navbar from '../Navbar/navbar';
import './banner.css';
import Images from '../../Constant/assets';


function banner() {
  return (
    <div>
        <Navbar/>
        <div className='uk-visible@m'>
            <div className="uk-position-relative uk-visible-toggle" tabindex="-1" data-uk-slideshow="animation: scale; autoplay: true; finite: false; min-height: 360; max-height: 620">
                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left ">
                            <img className='custom_sect_banner' src={Images.SLIDER} alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h1 className="home-title">
                                Icon of Tanjore Cuisine
                            </h1>
                            <a href="tel:+918448448909" className='uk-visible@m' rel="noopener noreferrer">
                                <button> 
                                    Contact Us
                                </button>
                            </a>
                            <a href="#contact"  spy={true} smooth={true} className='uk-margin-medium-left uk-visible@m' rel="noopener noreferrer">
                                <button className='button1'> 
                                    Enquire Now
                                </button>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                            <img className='custom_sect_banner' src={Images.SLIDER_1}  alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h1 className="home-title">
                                Customized Menu with<br/> Best Services
                            </h1>
                            <a href="tel:+918448448909" className='uk-visible@m' rel="noopener noreferrer">
                                <button> 
                                    Contact Us
                                </button>
                            </a>
                            <a href="#contact"  spy={true} smooth={true} className='uk-margin-medium-left uk-visible@m' rel="noopener noreferrer">
                                <button className='button1'> 
                                    Enquire Now
                                </button>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left ">
                            <img className='custom_sect_banner' src={Images.SLIDER_2} alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h1 className="home-title">
                                Market Lead in <br/> Catering Services
                            </h1>
                            <a href="tel:+918448448909" className='uk-visible@m' rel="noopener noreferrer">
                                <button> 
                                    Contact Us
                                </button>
                            </a>
                            <a href="#contact"  spy={true} smooth={true} className='uk-margin-medium-left uk-visible@m' rel="noopener noreferrer">
                                <button className='button1'> 
                                    Enquire Now
                                </button>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div className='uk-hidden@m'>
            <div className="uk-position-relative uk-visible-toggle" tabindex="-1" data-uk-slideshow="animation: slide; autoplay: true; finite: false; min-height: 300; max-height: 600;">
                <ul className="uk-slideshow-items">
                    <li>
                        <div className="uk-position-cover">
                            <img className='custom_sect_banner' src={Images.SLIDER} alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h2 className="" style={{fontSize:'2.5rem'}}>
                                Icon of <br/>Tanjore Cuisine
                            </h2>
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover">
                            <img className='custom_sect_banner' src={Images.SLIDER_1}  alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h2 className="" style={{fontSize:'2.5rem'}}>
                                Customized Menu <br/>with Best Services
                            </h2>                            
                        </div>
                    </li>
                    <li>
                        <div className="uk-position-cover">
                            <img className='custom_sect_banner' src={Images.SLIDER_2} alt="banner_image" data-uk-cover />
                        </div>
                        <div className="uk-position-large uk-position-center-left">
                            <h2 className="" style={{fontSize:'2.5rem'}}>
                                Market Lead in<br/> Catering <br/>Services
                            </h2>
                            
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <nav className="social"> 
            <ul>
                <li>
                    <a href="https://twitter.com/highflyer910">
                        <img src="https://img.icons8.com/color/30/000000/twitter--v2.png" alt='img'/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/highflyer910">
                        <img src="https://img.icons8.com/3d-fluency/30/000000/instagram-new.png" alt='img'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/teonamushambadze"> 
                        <img src="https://img.icons8.com/color/30/000000/linkedin-circled--v1.png" alt='img'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/teonamushambadze">
                        <img src="https://img.icons8.com/color/30/000000/youtube-music.png" alt='img'/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/teonamushambadze">
                        <img src="https://img.icons8.com/fluency/30/000000/facebook-circled.png" alt='img'/>
                    </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default banner