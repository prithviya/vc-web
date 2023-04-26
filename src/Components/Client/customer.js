import React from 'react';
import Images from '../../Constant/assets';

function customer() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='title'> Our Valuable <span>Customers</span></h1>
            <p className='text-black uk-text-center'>
                Vinayaka Caterers has a legacy of catering delicious food to several Colleges, Universities, Hospitals and Industries.<br/>We ensure that our customers are served best in terms of quality, which is what has made them enjoy <br/>an unforgettable food experience.
            </p>
            <div className="uk-position-relative uk-margin-top uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider="autoplay: true; finite: false  ; autoplay-interval: 2000; center: true;">
                <ul className="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-grid">
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_1} alt={"customer logo 1"}/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_2} alt="customer logo 2"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_3} alt="customer logo 3"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_4} alt="customer logo 4"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_5} alt="customer logo 5"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_6} alt="customer logo 6"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_7} alt="customer logo 7"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_8} alt="customer logo 8"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_9} alt="customer logo 9"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_10} alt="customer logo 10"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_11} alt="customer logo 11"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_12} alt="customer logo 12"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_13} alt="customer logo 13"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_14} alt="customer logo 14"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_15} alt="customer logo 15"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_16} alt="customer logo 16"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_17} alt="customer logo 17"/>
                        </div>
                    </li>
                    <li>
                        <div className="uk-panel">
                            <img src={Images.CLIENT_18} alt="customer logo 18"/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default customer