import React from 'react';
import './about.css';
import About from '../../Assets/img/about.png';

function about() {
  return (
    <div className='uk-section uk-section-muted'>
        <div className='uk-container'>
            <h1 className='title'><span>Who We</span> are ?</h1>
            <div class="uk-text-justify" data-uk-grid>
                <div class="uk-width-1-3@m">
                    <div class="uk-card uk-card-body">
                        <h1>About Us</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
                <div class="uk-width-2-3@m">
                    <div class="uk-card">
                        <img src={ About }/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default about