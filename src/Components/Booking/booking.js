import React from 'react';
import './booking.css';


function booking() {
  
  return (
    <div className='custom-sect-book'>
      <div className='uk-section'>
        <div className='uk-container'>
          <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500"><span>Our Catering </span>Services</h1>
          <h3 className='uk-text-capitalize uk-text-center uk-margin'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">A SOUP-TO-NUTS FOR ALL YOUR CATERING NEEDS</h3>
          <div className='uk-container uk-card'>
            <ul className="uk-subnav uk-subnav-pill" uk-switcher="animation: uk-animation-fade">
                <li><a href="/#">Industrial Catering</a></li>
                <li><a href="/#">Hospital Catering</a></li>
                {/* <li><a href="/#">Corporate Catering</a></li> */}
                <li><a href="/#">Institute Catering</a></li>
                
                <li><a href="/#">OutDoor Catering</a></li>
            </ul>
            <ul className="uk-switcher uk-margin uk-padding-small">
              <li>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card">
                      <img className="tabs-content-image" alt='img' src="https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg?w=740" width="100%"/>
                    </div>
                  </div>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card uk-card-body">
                    <h2 className="">
                      Industrial Catering
                    </h2>
                    <p className='uk-margin text-black uk-text-justify'>
                    Food is an integral part of everyone’s life and is associated with emotional values. It is important that each one gets proper nutrition on a daily basis in order to lead a healthy life. The food needs of each person vary and the diet must be planned accordingly. The working class requires food with a huge amount of nutritive benefits as they are the ones who work hard to hold their family together. We understand this need and prepare appetizing and nutritious food for the working class in the industry
                    </p>                       
                    </div>
                  </div>
                </div>                             
              </li>
              {/* <li>
              <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card uk-card-body">
                    <h2 className="">
                      Corporate Catering
                    </h2>
                    <p className='uk-margin text-black uk-text-justify'>
                    If you run a business, you must be aware of the massive amount of work you and your employees put in to make your business a success. It is often the dedication of the employees that goes unappreciated. The ones who put in their hard work, are sincere to produce results, and see that your company progresses to excellence ought to be recognized. To encourage your employees to work an extra mils recognized their hard work with a party bash choosing our appetizing menu and create a tasting impression on them.
                    </p> 
                    </div>
                  </div>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card">
                      <img className="tabs-content-image" alt='img' src="https://foods-drinks.com/wp-content/uploads/2020/09/Business-Lunch-Menu-Ideas.jpg" width="100%"/>
                    </div>
                  </div>
                </div>                             
              </li> */}
              <li>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card uk-card-body">
                    <h2 className="uk-text-middle">
                      Hospital Catering
                    </h2>
                    <p className='uk-margin text-black uk-text-justify '>
                    Though everyone requires food to meet their nutritional requirements, patients need it more than ever. Patients in hospitals, however  are in dire need of nutritious food to get well and bounce back to health. Keeping the well being of the medical community and their families, we prepare a balances menu that serve their diet.
                    </p> 
                    </div>
                  </div>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card">
                      <img className="tabs-content-image" alt='img' src="https://tngtong.com/assets/images/page/hospital2.jpg" width="100%"/>
                    </div>
                  </div>
                </div>                             
              </li>
              <li>
                <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card">
                    <img className="tabs-content-image" alt='img' src="https://3.imimg.com/data3/JE/QS/MY-12874012/best-catering-services-500x500.jpg" width="100%"/>
                  </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card uk-card-body">
                    <h2 className="">
                    Institute Catering
                    </h2>
                    <p className='uk-margin text-black uk-text-justify'>
                    Education is a significant part of life, similarly, a college where education happens is also a significant phase of life. Everyone’s college life is ought to be fun-filled, entertaining, and joyous. What’s more enjoyable is the various college events rather than the ceaseless lectures! College events are bound to be colourful, with plenty of competitions and food fair. College events are never complete without youngsters savouring the food. Right from starters to desserts we serve scrumptious food so that the plates are wiped clean in a jiffy! 
                    </p> 
                    </div>
                  </div>
                </div>                             
              </li>
               
              <li>
              <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                  <div className="uk-card uk-card-body">
                    <h2 className="">
                      OutDoor Catering
                    </h2>
                    <p className='uk-margin text-black uk-text-justify'>
                    Feast is the most awaited phase of any event, from birthday parties, and family functions, to wedding buffets. It is not just serving food to relatives or friends but also a way of exhibiting respect and affection. Food plays a vital role not just in terms of spending but also in satisfying the guests. It can ruin the very happiness of a wedding or any function for that matter. At the same time, lip-smacking food works wonders and it remains in the memory of the guests for a long time. Our list of carefully prepared dishes leaves the guests spellbound and has an everlasting effect that adds immense joy to the occasion.
                    </p> 
                    </div>
                  </div>
                  <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card">
                      <img className="tabs-content-image" alt='img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMosgGTmKNmGpwqRgFdAfJwH_MAFQFQsW8Q&usqp=CAU" width="100%"/>
                    </div>
                  </div>
                </div>                             
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default booking