import React from 'react';
import bgImage from '../03.jpg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

export default function Contact() {
  return (
    <>
      <div className='container-fluid cont_div phone'>
        <img src={bgImage} alt='' className='cont_bg' />
        <h1 className='text1'>Get in touch with StarFar Support</h1>
        <div className='cont_container phone'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title text-center'>
                <button
                  type='button'
                  className='call_btn btn btn-outline-primary my_small how_p1'
                >
                  <CallIcon /> Call us at 9899462789, 8010055720
                </button>
              </h5>
              <h6 className='card-subtitle mb-2 ml-3 mt-3 text-muted text-center my_small'>
                Monday to Friday 10:00am - 7:00pm IST
              </h6>
              <p className='card-text text-center text-muted form-control-sm my_small'>
                Toll-free number(s) but charges may apply. Check with your
                provider for more information on dialing toll-free numbers.
              </p>
            </div>
          </div>

          <div className='card' style={{ width: '18rem' }}>
            <div className='card-body'>
              <h5 className='card-title text-center'>
                <a href='mailto:starfarenterprises@gmail.com'>
                  <button
                    type='button'
                    className='call_btn btn btn-outline-primary'
                  >
                    <MailIcon /> starfarenterprises@gmail.com
                  </button>
                </a>
              </h5>
              <h6 className='card-subtitle mb-2 text-muted mt-3 text-center'>
                Follow us on: <InstagramIcon /> <FacebookIcon /> <TwitterIcon />
              </h6>
              <p className='card-text text-center text-muted form-control-sm'>
                We try to respond as soon as we can. Your query make us improve
                day by day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
