import React from 'react';
import './feature.css';

function feature() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='title'>
                <span>
                    Why Choose 
                </span> us
            </h1>
            <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match uk-text-center" data-uk-grid>
                <div>
                    <div class="uk-card uk-card-body uk-text-center">
                        <img className='cust-feat-image' src='https://2.wlimg.com/product_images/bc-full/2022/3/9978277/event-catering-services-1646911855-6238537.jpeg'/>
                    </div>
                </div>
                <div>
                    <div class="uk-child-width-1-3@m uk-child-width-1-2 uk-grid-small uk-grid-match uk-text-center" data-uk-grid>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                                <img src="https://img.icons8.com/ios-filled/64/FF5400/heart-health.png"/>
                                <h3 class="uk-card-title">No Chest Burns</h3>
                            </div>
                        </div>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src="https://img.icons8.com/glyph-neue/64/FF5400/engine-oil-level.png"/>
                                <h3 class="uk-card-title uk-margin-remove">Virgin Oil Only</h3>
                            </div>
                        </div>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/64/FF5400/external-cooking-kitchen-tanah-basah-glyph-tanah-basah.png"/>
                                <h3 class="uk-card-title uk-margin-remove">Traditional Cooking</h3>
                            </div>
                        </div>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src="https://img.icons8.com/external-sbts2018-solid-sbts2018/64/FF5400/external-rice-basic-ui-elements-2.4-sbts2018-solid-sbts2018.png"/>
                                <h3 class="uk-card-title uk-margin-remove">Utterly Tenderly Meaty</h3>
                            </div>
                        </div>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src="https://img.icons8.com/ios-filled/64/FF5400/chef-hat.png"/>
                                <h3 class="uk-card-title uk-margin-remove">Serving You Delicious Food</h3>
                            </div>
                        </div>
                        <div>
                            <div class="uk-card uk-card-default uk-card-hover uk-card-body">
                            <img src="https://img.icons8.com/external-icongeek26-glyph-icongeek26/64/FF5400/external-vegetable-healthy-lifestyle-icongeek26-glyph-icongeek26.png"/>
                                <h3 class="uk-card-title uk-margin-remove">
                                    Purely Vegan Experience</h3>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default feature