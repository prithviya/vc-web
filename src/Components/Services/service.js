import React from 'react';
import './service.css';
// import services from '../../Assets/img/about.png';
import Images from '../../Constant/assets';

function service() {
  return (
    <div className='uk-section uk-section-muted'>
        <div class="uk-container">
            <h1 className='title' data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">What <span>We do ?</span></h1>
            <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { Images.SER_IMG_1 } alt='Snacky Snacks'/>
                                <h3 className='uk-margin-top'>Snack Treat</h3>
                                <p className='uk-text-justify'>
                                We prepare scrumptious snacks for you to chomp on. Quick snacks are great to chase away sleepiness and make you lively. Seize these yummy titbits to abandon laziness.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { Images.SER_IMG_2 } alt='Grab a Meal'/>
                                <h3 className='uk-margin-top'>Grab a Meal</h3>
                                <p className='uk-text-justify'>
                                To have a delicious spread in front of you is a great treat to your eyes and to your tummy. Grab a Meal to have an ecstatic food experience that transforms into contentment.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { Images.SER_IMG_3 } alt='Masala Mela'/>
                                <h3 className='uk-margin-top'>Masala Mela</h3>
                                <p className='uk-text-justify'>
                                Masala Mela has a range of hot and spicy feast food for your taste buds. Take a look at this menu and enjoy the fiery food finding its way to show you its power!
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src= { Images.SER_IMG_4 }  alt='Treat'/>
                                <h3 className='uk-margin-top'>Junkie Treat</h3>
                                <p className='uk-text-justify'>
                                Whenever you feel craving for fast food, reward yourself with a junkie treat. Right from pizzas to burgers, get junkie treats to relish.
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src={ Images.SER_IMG_5 }  alt='Dessert'/>
                                <h3 className='uk-margin-top'>Dessert Delight</h3>
                                <p className='uk-text-justify'>
                                From Gulab Jamun to Rasamalai, get all varieties of desserts to satisfy your sweet tooth. Indulge in sweet treats and find yourself in euphoria. 
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">
                    <div class="uk-card">
                        <ul class="c-services">
                            <li class="c-services__item">
                                <img src={ Images.SER_IMG_6 }  alt='chinesse'/>
                                <h3 className='uk-margin-top'>Canton Cuisine</h3>
                                <p className='uk-text-justify'>
                                Chinese food enthusiasts, assemble! Here is the call for you to gobble up everything from Schezwan noodles, Chicken with Chestnuts etc.,
                                </p>
                            </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default service