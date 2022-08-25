import React from 'react';
import './gallery.css';

function gallery() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='title'><span>View Our</span> Galleria</h1>
            <div class="uk-position-relative" data-uk-slideshow="ratio: 7:3; autoplay: true; autoplay-interval: 2500; finite: true; min-height: 350; max-height: 600; animation: fade; pause-on-hover: true;">
                <ul class="uk-slideshow-items custom-slideshow-items">
                    <li>
                        <img className='' src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" data-uk-cover/>
                    </li>
                </ul>
                <div class="uk-position-bottom-center uk-position-small">
                    <ul class="uk-thumbnav">
                        <li uk-slideshow-item="0">
                            <a href="#">
                                <img className='' src="https://images.unsplash.com/photo-1525265332434-d52e2314161d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" width="60" height="60" alt="" />
                            </a>
                        </li>
                        <li uk-slideshow-item="1">
                            <a href="#">
                                <img className='' src="https://images.unsplash.com/photo-1628578569073-8ee77295315d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="2">
                            <a href="#">
                                <img className='' src="https://images.unsplash.com/photo-1590577976322-3d2d6e2130d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="4">
                            <a href="#">
                                <img className='' src="https://images.unsplash.com/photo-1522413452208-996ff3f3e740?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" width="60" height="60" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default gallery