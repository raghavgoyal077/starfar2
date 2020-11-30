import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from '../logo.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CallIcon from '@material-ui/icons/Call';

export default function Navbar() {
  return (
    <>
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-11 mx-auto'>
            <nav className='navbar navbar-expand-lg navbar-dark'>
              <div className='container-fluid'>
                <a className='navbar-brand' href='/'>
                  <img className='img-fluid' src={logo} alt='logo' />
                </a>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-toggle='collapse'
                  data-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div
                  className='collapse navbar-collapse'
                  id='navbarSupportedContent'
                >
                  <ul className='navbar-nav ml-auto mb-2 mb-lg-0'>
                    <li className='nav-item'>
                      <NavLink
                        activeClassName='menu_active'
                        exact
                        className='nav-link bor_bot'
                        aria-current='page'
                        to='/'
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        activeClassName='menu_active'
                        exact
                        className='nav-link bor_bot'
                        to='/service'
                      >
                        Shop <ShoppingCartIcon />
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        activeClassName='menu_active'
                        exact
                        className='nav-link bor_bot'
                        to='/about'
                      >
                        Learn
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink
                        activeClassName='menu_active'
                        exact
                        className='nav-link bor_bot'
                        to='/contact'
                      >
                        <CallIcon />
                        Support
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
