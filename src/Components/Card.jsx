import React from 'react';

export default function Card({ imgsrc, title, detail, linkMore }) {
  console.log(linkMore);
  return (
    <>
      <div className='col-md-4 col-10 mx-auto'>
        <div className='card'>
          <img
            src={imgsrc}
            className='sp_img card-img-top img-fluid'
            alt='...'
          />
          <div className='card-body'>
            <h5 className='card-title font-weight-bold'>{title}</h5>
            <br />
            <p className='card-text'>
              <ul>
                <li>{detail[0]}</li>
                <li>{detail[1]}</li>
                <li>{detail[2]}</li>
              </ul>
              <a href={linkMore} target='_blank' className='more'>
                more
              </a>
            </p>
            <a href={linkMore} target='_blank' className='btn btn-dark'>
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
