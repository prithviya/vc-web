import React from 'react';
import './footer.css';
import Images from '../../Constant/assets';

function footer() {
  return (
    <div className='custom-sect-footer'>
        <div className="uk-section">
            <div className="uk-container">                
                <div className="uk-grid-match uk-child-width-1-4@m" data-uk-grid>
                    <div>
                        <div className='uk-card-body'>
                            <img src={Images.LOGO_1} alt='logo' />
                        </div>
                    </div>
                    <div className="widget footer_useful_links">
						<h2 className="footer_widget_title">Quick Links</h2>
                        <ul className='ul_li_block clearfix'>
                            <li>
                                <a href="/">
                                    <i className="uil uil-arrow-circle-right"></i> Home
                                </a>
                            </li>
                            <li>
                                <a href="/#about">
                                    <i className="uil uil-arrow-circle-right"></i> About Us 
                                </a>
                            </li>
                            <li>
                                <a href="/#services">
                                    <i className="uil uil-arrow-circle-right"></i> Our Service 
                                </a>
                            </li>
                            <li>
                                <a href="/#contact">
                                    <i className="uil uil-arrow-circle-right"></i> Contact Us
                                </a>
                            </li>
                        </ul>
					</div>
                    <div className="widget footer_useful_links">
                        <h2 className="footer_widget_title">Contact Us</h2>
                        <ul className='ul_li_block clearfix'>
                            <li>
                                <a href='tel:+9952402650'>
                                    <span>
                                        <i className="uil uil-phone"></i>  99524 02650 /  99524 02653
                                    </span> 
                                </a>
                            </li>
                            <li>
                                <a href='tel:+9600033550'>
                                    <span>
                                        <i className="uil uil-phone"></i>  96000 33550
                                    </span> 
                                </a>
                            </li>
                            <li>
                                <a href='mailto:vinayaka.caterers@gmail.com'>
                                    <span><i className="uil uil-at"></i> vinayaka.caterers@gmail.com</span> 
                                </a>
                            </li>
                            <li>
                                <a href='/#'>
                                    <span><i className="uil uil-user-location"></i> Location</span> 
                                </a>
                            </li>
                        </ul>
                    </div> 
                    <div className='widget footer_useful_links'>
                        <h2 className="footer_widget_title">Media Links</h2>
                        <ul className='ul_li_block clearfix'>
                            <li>
                                <a href="https://www.instagram.com/vinayakacaterers.in/" target={'_blank'}>
                                <i className="uil uil-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/vinayakacaterers.in" target={'_blank'}>
                                    <i className="uil uil-facebook-messenger-alt"></i> Facebook 
                                </a>
                            </li>
                            <li>
                                <a href="https://api.whatsapp.com/send/?phone=919952402650&amp;text=Hi, I am looking for Catering Services &amp;app_absent=0" target={'_blank'}>
                                <i className="uil uil-whatsapp"></i> Whatsapp
                                </a>
                            </li>
                        </ul>
                    </div>                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default footer