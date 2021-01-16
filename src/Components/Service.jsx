import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

export default function Service() {
  return (
    <>
      <div className='my-5'>
        <div className='text-center'>
          <h1>
            <strong>Enjoy Shopping</strong> &#128522;
          </h1>
        </div><br/>
        <div className='container-fluid mb-5'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row gy-5'>{
                Sdata.map((val, ind) => {
                  return <Card 
                    imgsrc={val.imgSrc}
                    title={val.title}
                    detail={val.det}
                    linkMore={val.linkMore}
                    key={ind}
                  />
                })
              }</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
