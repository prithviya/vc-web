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
            <div class="uk-position-relative uk-margin-top uk-visible-toggle uk-light" tabindex="-1" data-uk-slider="autoplay: true; finite: false  ; autoplay-interval: 2000; center: true;">
                <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-grid">
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_1} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_2} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                        <img src={Images.CLIENT_3} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_4} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_5} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_6} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_7} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_8} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_9} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_10} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_11} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_12} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_13} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_14} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_15} alt=""/>
                        </div>
                    </li>
                    <li>
                        <div class="uk-panel">
                            <img src={Images.CLIENT_16} alt=""/>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default customer