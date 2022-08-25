import React from 'react';
import './booking.css';
import Footer from '../Footer/footer';

function booking() {
  return (
    <div className='custom-sect-book'>
      <div className='uk-section'>
        <div className='uk-container'>
          <h1 className='title'><span>Our Catering </span>Services</h1>
          <h3 className='uk-text-capitalize uk-text-center uk-margin'>A SOUP-TO-NUTS FOR ALL YOUR CATERING NEEDS</h3>
          <div className='uk-container uk-card'>
            <ul class="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                <li><a href="#">Industrial Meals</a></li>
                <li><a href="#">Corporate Gifting</a></li>
                <li><a href="#">College Event</a></li>
                <li><a href="#">Hospital Snacks</a></li>
            </ul>
            <ul class="uk-switcher uk-margin uk-padding-small">
              <li>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                  <div class="uk-card">
                    <img className="tabs-content-image" src="http://cdn.home-designing.com/wp-content/uploads/2017/07/natural-industrial-dining-room-decor.jpg" width="100%"/>
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-body">
                    <h2 class="">
                      Industrial
                    </h2>
                    <p className='uk-margin'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button class="uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Open</button>                    
                    </div>
                  </div>
                </div>                             
              </li>
              <li>
              <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div>
                  <div class="uk-card uk-card-body">
                    <h2 class="">
                      Industrial
                    </h2>
                    <p className='uk-margin'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button class="uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Open</button>
        
                    </div>
                  </div>
                  <div>
                    <div class="uk-card">
                      <img className="tabs-content-image" src="https://i.pinimg.com/originals/e4/74/5e/e4745e6d8b1c5648d9dee75996579f0f.jpg" width="100%"/>
                    </div>
                  </div>
                </div>                             
              </li>
              <li>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div>
                  <div class="uk-card">
                    <img className="tabs-content-image" src="https://www.beaconcollege.edu/wp-content/uploads/2021/08/Dining-Hall.jpg" width="100%"/>
                  </div>
                </div>
                <div>
                  <div class="uk-card uk-card-body">
                    <h2 class="">
                      College Event
                    </h2>
                    <p className='uk-margin'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button class="uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Open</button>
        
                    </div>
                  </div>
                </div>                             
              </li>
              <li>
              <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div>
                  <div class="uk-card uk-card-body">
                    <h2 class="">
                      Hospital
                    </h2>
                    <p className='uk-margin'>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </p>
                    <button class="uk-margin-small-right" type="button" data-uk-toggle="target: #modal-example">Open</button>
        
                    </div>
                  </div>
                  <div>
                    <div class="uk-card">
                      <img className="tabs-content-image" src="https://www.hfmmagazine.com/ext/resources/images/2017/HFM-magazine/November/1117_int_dining_americanBistro.jpg" width="100%"/>
                    </div>
                  </div>
                </div>                             
              </li>
                <div id="modal-example" data-uk-modal>
                  <div class="uk-modal-dialog uk-modal-body">
                    <div>
                    <form >
                      <fieldset class="uk-fieldset uk-grid-small" data-uk-grid>
                        <div class="uk-width-1-2@s">
                          <label for="">Name</label>
                          <input class="uk-input" type="text" placeholder="Contact Person Name"/>
                        </div>     
                        <div class="uk-width-1-2@s">
                          <label for="">Organsiation Name</label>
                          <input class="uk-input" type="text" placeholder="Company Name"/>
                        </div> 
                        <div class="uk-width-1-2@s">
                          <label for="">Date</label>
                          <input class="uk-input" type="Date" placeholder="Order Date"/>
                        </div>
                        <div class="uk-width-1-2@s">
                          <label for="">Phone</label>
                          <input class="uk-input" type="number" placeholder="Mobile Number"/>
                        </div> 
                        <div class="uk-width-1-2@s">
                          <label for="">Place</label>
                          <input class="uk-input" type="text" placeholder="City"/>
                        </div>                
                        <div class="uk-width-1-1@s">
                          <button class="" type='Submit' value={'submit'}>Submit</button>
                        </div>
                      </fieldset>
                    </form>
                    </div>
                  </div>
                </div>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default booking