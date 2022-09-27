import React from 'react'

function branch() {
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500"><span>Where's location </span>Services</h1>
            <h2 className='uk-text-center'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500">Find our services at various locations in Tamilnadu</h2>
            <div className="uk-child-width-1-4@m uk-margin-top uk-grid-small uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h2 className='text-white'>Thanjavur</h2>
                        <p className='text-white'>
                            No.21, Mannar Sarfoji Nagar, Opposite New Bus Stand, Thanjavur
                        </p>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                <div className="uk-card uk-card-default uk-card-body">
                        <h2 className='text-white'>Puducherry</h2>
                        <p className='text-white'>
                            No.16, P.K.Salai, <br/>Karaikkal
                        </p>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h2 className='text-white'>Coimbatore</h2>
                        <p className='text-white'>
                            No.17/1, Raj Bhavan, Othakkalmandapam.
                        </p>
                    </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card uk-card-default uk-card-body">
                        <h2 className='text-white'>Chennai</h2>
                        <p className='text-white'>
                            Old No.121, New No.93, Tharhanur Vadakal Village, Sriperumbathur
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default branch