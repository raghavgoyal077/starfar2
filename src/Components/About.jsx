import React from 'react';
import Speaker from '../spks.png';
import Speaker2 from '../spks2.jpg';
import Speaker3 from '../spks3.png';

export default function About() {
  return (
    <>
      <div className='container-fluid about_div'>
        <div className='one phone'>
          <div className='mr-5'>
            <h1 className='how'>how starfar works</h1>
            <p className='how_p1'>
              Everything you need to start enjoying brilliant sound.
            </p>
            <p className='how_p2'>
              Set up your speaker on your home network to start streaming music.
            </p>
          </div>
          <img
            src={Speaker}
            alt='speakers_img'
            className='spk_img spk_img1 img-fluid'
          />
        </div>
        <div className='two phone'>
          <img
            src={Speaker2}
            alt='speakers_img'
            className='spk_img_second spk_img1 img-fluid'
          />
          <div className='ml-5'>
            <h1 className='brilliant how'>brilliant sound</h1>
            <p className='how_p1' >
              Inventing the future of listening.
            </p>
            <div style={{ lineHeight: '10px', marginTop: '30px' }}>
              <p className='how_p1'>
                StarFar creates technology that celebrates sound, continuously
              </p>
              <p className='mt-0 how_p2'>
                refines the listening experience, and connects listeners and
                creators.
              </p>
            </div>
          </div>
        </div>
        <div className='three phone'>
          <div className='mr-5'>
            <h1
              className='how'
            >
              make in india
            </h1>
            <p className='how_p1' >
              Ongoing global campaign.
            </p>
            <div style={{ lineHeight: '10px', marginTop: '30px' }}>
              <p className='how_p1'>
                Proudly manufacture 'needs' by our own.
              </p>
              <p className='how_p2'>
                As manufactured in India, the quality is challangeable.
              </p>
            </div>
          </div>
          <img
            src={Speaker3}
            alt='speakers_img'
            className='spk3_img spk_img_third img-fluid'
          />
        </div>
      </div>
    </>
  );
}
