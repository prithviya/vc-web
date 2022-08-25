import React from 'react';
import './footer.css'

function footer() {
  return (
    <div className='custom-sect-footer'>
        <div class="uk-section">
            <div class="uk-container">
                
                <div class="uk-grid-match uk-child-width-1-4@m" data-uk-grid>
                    <div>
                        
                    </div>
                    <div>
                    <h2>Company Logo</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    </div>
                    <div class="widget footer_useful_links">
						<h2 class="footer_widget_title">Quick Links</h2>
                        <ul className='ul_li_block clearfix'>
                            <li>
                                <a href="#">
                                    <i class="uil uil-arrow-circle-right"></i> Home
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <i class="uil uil-arrow-circle-right"></i> About Us 
                                </a>
                            </li>
                            <li>
                                <a href="#about">
                                    <i class="uil uil-arrow-circle-right"></i> Our Service 
                                </a>
                            </li>
                            <li>
                                <a href="#contact">
                                    <i class="uil uil-arrow-circle-right"></i> Contact Us
                                </a>
                            </li>
                        </ul>
					</div>
                    <div class="widget footer_useful_links">
                        <h2 class="footer_widget_title">Contact Us</h2>
                        <ul className='ul_li_block clearfix'>
                            <li>
                                <a>
                                    <span>
                                        <i class="uil uil-phone"></i>  9952402650
                                    </span> 
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span><i class="uil uil-at"></i> vinayaka.caterers@gmail.com</span> 
                                </a>
                            </li>
                            <li>
                                <a>
                                    <span><i class="uil uil-user-location"></i> Location</span> 
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