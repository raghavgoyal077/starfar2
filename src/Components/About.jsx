import React from 'react';
import Speaker from '../spks.png';
import Speaker2 from '../spks2.png';
import Speaker3 from '../spks3.png';

export default function About() {
  return (
    <>
      <div className='container-fluid about_div'>
        <div className='one'>
          <div className='mr-5'>
            <h1
              className='how'
            >
              how starfar works
            </h1>
            <p className='how_p1'>
              Everything you need to start enjoying brilliant sound.
            </p>
            <p className='how_p2' style={{ fontSize: '20px' }}>
              Set up your speaker on your home network to start streaming music.
            </p>
          </div>
          <img
            src={Speaker}
            alt='speakers_img'
            className='spk_img spk_img1 img-fluid'
          />
        </div>
        <div className='two'>
          <img
            src={Speaker2}
            alt='speakers_img'
            className='spk_img spk_img2 img-fluid'
            style={{ marginRight: '300px', width: '300px' }}
          />
          <div className='ml-5'>
            <h1
              className='brilliant'
              
            >
              brilliant sound
            </h1>
            <p className='' style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Inventing the future of listening.
            </p>
            <div style={{ lineHeight: '10px', marginTop: '30px' }}>
              <p className='' style={{ fontSize: '18px' }}>
                StarFar creates technology that celebrates sound, continuously
              </p>
              <p className='mt-0' style={{ fontSize: '18px' }}>
                refines the listening experience, and connects listeners and
                creators.
              </p>
            </div>
          </div>
        </div>
        <div className='three'>
          <div className='mr-5'>
            <h1
              style={{
                fontSize: '80px',
                textTransform: 'capitalize',
                marginBottom: '90px',
                borderBottom: '2px solid black',
                width: 'fit-content',
              }}
            >
              make in india
            </h1>
            <p className='' style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Ongoing global campaign.
            </p>
            <div style={{ lineHeight: '10px', marginTop: '30px' }}>
              <p className='' style={{ fontSize: '18px' }}>
                Proudly manufacture 'needs' by our own.
              </p>
              <p className='' style={{ fontSize: '18px' }}>
                As manufactured in India, the quality is challangeable.
              </p>
            </div>
          </div>
          <img
            src={Speaker3}
            alt='speakers_img'
            className='spk3_img spk_img3 img-fluid'
            style={{ marginLeft: '280px', width: '300px' }}
          />
        </div>
      </div>
    </>
  );
}
