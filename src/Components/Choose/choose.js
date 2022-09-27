import React from 'react';
import './choose.css';

function choose() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">Why <span> choose Us</span></h1>
            <div className="uk-child-width-1-4@m uk-grid-small uk-text-center uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card uk-card-body service-box icon-box iconbox-theme-colored bg-white">
                    <a className='icon icon-dark' href='/#'>
                        <img src="https://img.icons8.com/glyph-neue/50/FFFFFF/ingredients.png" alt='img'/>
                    </a>
                    <h2 className="uk-margin-top">Premium <br/><span className='text-orange'>
                    Quality</span> <br/>Ingredients</h2>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card uk-card-body service-box icon-box iconbox-theme-colored bg-white">
                    <a className='icon icon-dark' href='/#'>
                        <img src="https://img.icons8.com/pastel-glyph/50/FFFFFF/junk-food--v1.png" alt='img'/>    
                    </a>
                    <h2 className="uk-margin-top">Customized <br/><span className='text-orange'>Handcrafting</span><br/> Menu</h2>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card uk-card-body service-box icon-box iconbox-theme-colored bg-white">
                    <a className='icon icon-dark' href='/#'>
                    <img src="https://img.icons8.com/ios-filled/50/FFFFFF/chef-hat.png" alt='img'/>
                    </a>
                    <h2 className="uk-margin-top">Highly<br/><span className='text-orange'>Skilled</span> <br/>Chefs</h2>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div className="uk-card uk-card-body service-box icon-box iconbox-theme-colored bg-white">
                    <a className='icon icon-dark' href='/#'>
                    <img src="https://img.icons8.com/glyph-neue/50/FFFFFF/deliver-food.png" alt='img'/>
                    </a>
                    <h2 className="uk-margin-top">Professional <br/><span className='text-orange'>Doorstep</span><br/> Services</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default choose