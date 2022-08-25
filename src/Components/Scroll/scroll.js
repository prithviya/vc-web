import React from 'react';
import ScrollToTop from "react-scroll-to-top";

function scroll() {
  return (
    <div>
        <button
                onClick={() => {
                window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
                }}
                style={{
                position: 'fixed',
                padding: '7px 7px',
                fontSize: '2rem !important',
                bottom: '40px',
                right: '40px',
                background: 'linear-gradient(19deg, #ff4500 10%, #d43b04 100%)',
                // backgroundColor: 'rgb(212, 59, 4)',
                // background: url('..'),
                color: '#fff',
                textAlign: 'center',
                zIndex: '9999',
                borderRadius: '5px',
                }}
            >
                <img src="https://img.icons8.com/ios-filled/20/FFFFFF/login-rounded-up.png"/>
            </button>
    </div>
  )
}

export default scroll