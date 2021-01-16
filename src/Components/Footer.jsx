import React from 'react';
// import CallIcon from '@material-ui/icons/Call';
// import MailIcon from '@material-ui/icons/Mail';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';

export default function Footer() {
  return (
    <>
      <footer
        // style={{ border: '2px solid black', backgroundColor: 'gray' }}
        className='text-center bg-dark-gray mb-0 footer small border-2'
      >
        <div className='pr-5'>
          {/* {' '}
          <CallIcon /> <MailIcon /> <InstagramIcon /> <FacebookIcon />{' '}
          <TwitterIcon />{' '} */}
          <p>
            COPYRIGHT © 2021 STARFAR LTD. ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </>
  );
}
