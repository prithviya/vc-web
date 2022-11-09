import React from 'react';
import { useRef as UseRef, useState as UseSate } from "react";
import emailjs from 'emailjs-com';
import Images from '../../Constant/assets';

function contact() {
    const formRef = UseRef();
  const [done, setDone] = UseSate(false)

  const handleSubmit = (e) =>
    {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_26rdb3v', e.target, 'j-PoCW4zzw0FF7NNc')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='uk-section'>
        <div className='uk-container'>
            <div className="uk-child-width-1-2@m uk-grid-small uk-grid-match" data-uk-grid>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                <div className="uk-card uk-card-body">
                <h1 className='title'data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500"><span>Get In </span>Touch</h1>
                    <form className="uk-grid-small" id="form" ref={formRef} onSubmit={handleSubmit} data-uk-grid>
                    <fieldset className="uk-fieldset uk-grid-small" data-uk-grid>
                    <div className="uk-width-1-2@s">
                        <label>Name</label>
                        <input className="uk-input" name='name' type="text" placeholder="Contact Person Name"/>
                    </div>     
                    <div className="uk-width-1-2@s">
                        <label>Organsiation Name</label>
                        <input className="uk-input" name='organisation_name' type="text" placeholder="Company Name"/>
                    </div> 
                    <div className="uk-width-1-2@s">
                        <label>Date</label>
                        <input className="uk-input" name='date' type="Date" placeholder="Order Date"/>
                    </div>
                    <div className="uk-width-1-2@s">
                        <label>Phone</label>
                        <input className="uk-input" name='phoneno' maxLength={10} type="tel" placeholder="Mobile Number"/>
                    </div> 
                    <div className="uk-width-1-2@s">
                        <label>Place</label>
                        <input className="uk-input" name='place' type="text" placeholder="City"/>
                    </div>                
                    <div className="uk-width-1-1@s">
                        <button className="" type='Submit' value={'submit'}>Submit</button>
                    </div>
                    </fieldset>
                    <div className="clear">
                        {done && 
                        <div style={{color: "#fd7e14", marginTop: "15px", fontSize: "18px", textAlign: "center"}}>Thank you</div>}
                    </div>
                    </form>                     
                </div>
                </div>
                <div data-uk-scrollspy="cls: uk-animation-scale-up; repeat: false; delay: 500;">
                    <div className="uk-card">
                        <img className="tabs-content-image" alt='img' src={Images.CONTACT_US} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact