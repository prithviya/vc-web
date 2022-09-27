import React from 'react';
import './gallery.css';

function gallery() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">View<span> Our Galleria</span></h1>
            <div className="uk-position-relative" data-uk-slideshow="ratio: 5:5; autoplay: true; autoplay-interval: 2500; finite: false;  min-height: 350; max-height: 600; animation: fade; pause-on-hover: true;">
                <ul className="uk-slideshow-items custom-slideshow-items">
                    <li>
                        <img className='' src="https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg?w=740&t=st=1663908159~exp=1663908759~hmac=c304d7b23e91ba80de21c29630b862a7b9469c6ecd0023bfbd6359fc2e833493" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/free-photo/high-angle-indian-food-arrangement_23-2148734737.jpg?w=740&t=st=1663908351~exp=1663908951~hmac=3c179f03636c1fe8a531e9a9deaee0fcd99ffe0f2ed1008db9c782c6376017e6" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?w=740&t=st=1663908458~exp=1663909058~hmac=b9a5e522851fe93916a9ef36ac28e8193bb9d8938a852cc1eb287783bbe654a8" alt="" data-uk-cover/>
                    </li>
                    <li>
                        <img className='' src="https://img.freepik.com/premium-photo/homemade-frozen-vanilla-ice-cream_696537-197.jpg?w=740" alt="" data-uk-cover/>
                    </li>
                </ul>
                <div className="uk-position-bottom-center uk-position-small">
                    <ul className="uk-thumbnav">
                        <li uk-slideshow-item="0">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/free-photo/schezwan-noodles-szechwan-vegetable-hakka-noodles-chow-mein-is-popular-indo-chinese-recipes-served-bowl-plate-with-wooden-chopsticks_466689-74647.jpg?w=740&t=st=1663908159~exp=1663908759~hmac=c304d7b23e91ba80de21c29630b862a7b9469c6ecd0023bfbd6359fc2e833493" width="60" height="60" alt="" />
                            </a>
                        </li>
                        <li uk-slideshow-item="1">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/free-photo/high-angle-indian-food-arrangement_23-2148734737.jpg?w=740&t=st=1663908351~exp=1663908951~hmac=3c179f03636c1fe8a531e9a9deaee0fcd99ffe0f2ed1008db9c782c6376017e6" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="2">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18809.jpg?w=740&t=st=1663908458~exp=1663909058~hmac=b9a5e522851fe93916a9ef36ac28e8193bb9d8938a852cc1eb287783bbe654a8" width="60" height="60" alt=""/>
                            </a>
                        </li>
                        <li uk-slideshow-item="3">
                            <a href="/#">
                                <img className='' src="https://img.freepik.com/premium-photo/homemade-frozen-vanilla-ice-cream_696537-197.jpg?w=740" width="60" height="60" alt="" />
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