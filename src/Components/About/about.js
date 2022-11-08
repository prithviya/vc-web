import React from 'react';
import './about.css';
import About from '../../Assets/img/video.mp4';

function about() {
  return (
    <div className='uk-section'>   
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500"><span>Who We</span> are ?</h1>
            <div className="uk-flex-middle uk-grid-match" data-uk-grid>
                <div className="uk-width-1-2@m" data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card uk-card-body">
                        <h1>About Us</h1>
                        <p className='text-black uk-text-justify'>
                            Vinayaka Caterers is a catering service company based in Tamil Nadu. We currently serve in four cities in Tamil Nadu, Thanjavur, Puducherry, Coimbatore, and Chennai. We have a wide range of dishes from various cuisines to provide. We rustle up tasty and flavourful dishes for you to feast on.
                        </p>
                        <p className='text-black uk-text-justify'>
                            Nibbling on yummy snacks to having a proper meal to calm your tummy, Vinakaya Caterers serves you the best. We also take massive orders  for industrial meals, corporate gifting, hospital meals, and college events. Vinayaka Caterers understands your requirements and ensures to serve you high-quality food to give you an amazing food experience like no other.
                        </p>   
                    </div>
                </div>
                <div className="uk-width-1-2@m">
                    <div className="uk-card uk-card-body">
                        <video src={About} width='100%' loop muted playsInline uk-video="autoplay: inview"></video>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about