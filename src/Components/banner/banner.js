import React from 'react';
import Navbar from '../Navbar/navbar';
import './banner.css';


function banner() {
  return (
    <div>
        <Navbar/>
        <div id='home-page' data-uk-slideshow="ratio: 6:3; autoplay: true; autoplay-interval: 2500; finite: true; min-height: 350; max-height: 600; animation: slide; pause-on-hover: true;">
            <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" >
                <ul className="uk-slideshow-items">
                    <li>
                        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                            <img src="https://img.freepik.com/premium-photo/photo-traditional-indian-food-with-spices_162568-1316.jpg" alt="" data-uk-cover/>
                        </div>
                        <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                        <div class="uk-position-large uk-position-center-left">
                            <div uk-slideshow-parallax="scale: 1,1,0.8" className='custom-banner-heading'>
                                <h1 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-visible@m'>It's not just Food, <br/>It's an Experience.</h1>
                                <h2 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-hidden@m'>It's not just Food, <br/>It's an Experience.</h2>
                                <p uk-slideshow-parallax="x: 1000,0,0;" className='custom-banner-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>                    
                    </li>
                    <li>                    
                        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                            <img src="https://img.freepik.com/premium-photo/indian-cuisine-bhindi-masala-wooden-surface_55610-3834.jpg?w=740" alt="" data-uk-cover/>
                        </div>
                        <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                        <div class="uk-position-large uk-position-center-left">
                            <div uk-slideshow-parallax="scale: 1,1,0.8" className='custom-banner-heading'>
                                <h1 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-visible@m'>Order your Favourite<br/> here anytime</h1>
                                <h2 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-hidden@m'>Order your Favourite<br/> here anytime </h2>
                                <p uk-slideshow-parallax="x: 1000,0,0;" className='custom-banner-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="uk-position-cover" uk-slideshow-parallax="scale: 1.2,1.2,1">
                            <img src="https://img.freepik.com/premium-photo/indian-cuisine-bhindi-masala-wooden-surface_55610-3830.jpg?w=826" alt="" data-uk-cover/>
                        </div>
                        <div class="uk-position-cover" uk-slideshow-parallax="opacity: 0,0,0.2; backgroundColor: #000,#000"></div>
                        <div class="uk-position-large uk-position-center-left">
                            <div uk-slideshow-parallax="scale: 1,1,0.8" className='custom-banner-heading'>
                                <h1 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-visible@m'>Where taste <br/> Meets the myth</h1>
                                <h2 uk-slideshow-parallax="x: 600,0,0" className='custom-banner-title uk-hidden@m'>Where taste <br/> Meets the myth</h2>
                                <p uk-slideshow-parallax="x: 1000,0,0;" className='custom-banner-title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </div>
                    </li>                
                </ul>
            </div>            
        </div>
    </div>
  )
}

export default banner