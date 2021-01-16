import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import h1 from '../h1.jpg';
import h2 from '../h2.jpg';
import h3 from '../h3.jpg';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <div className='home_container'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-ride='carousel'
        data-pause='false'
        data-interval='5000'
      >
        <ol className='carousel-indicators'>
          <li
            data-target='#carouselExampleCaptions'
            data-slide-to='0'
            className='active'
          ></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
          <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
        </ol>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img src={h1} className='d-block w-100 img-fluid' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h1>StarFar Creations</h1>
              <p>
                A step to fill <strong>joy & happiness</strong> in your life
              </p>
              <br />
              <NavLink className='home_link' to='/service' exact>
                Get Started
              </NavLink>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={h2} className='d-block w-100 img-fluid' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h1>Feel The Vibe</h1>
              <p>
                Music is the language of the spirit. It opens the secret of life
                bringing peace, abolishing strife.
              </p>
              <br />
              <NavLink className='home_link' to='/service' exact>
                Get Started
              </NavLink>
            </div>
          </div>
          <div className='carousel-item'>
            <img src={h3} className='d-block w-100 img-fluid' alt='...' />
            <div className='carousel-caption d-none d-md-block'>
              <h1>Make In India</h1>
              <p>
                Make in India' is a LION's step! This initiative on one hand,
                will increase manufacturing growth, and at the same time, will
                directly benefit the youth of the nation in the form of
                employment.
              </p>
              <br />
              <NavLink className='home_link' to='/service' exact>
                Get Started
              </NavLink>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleCaptions'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleCaptions'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </a>
      </div>
    </div>
  );
}
