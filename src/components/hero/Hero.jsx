import React from 'react';
import './hero.scss';
import { SiAdobecreativecloud } from 'react-icons/si';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='heroLeft'>
        <h2>Creative cloud</h2>
        <h1>Save big. Start creating.</h1>
        <h3>
          Get 20+ apps and save 25%. First year only. Offer ends february 21.
        </h3>
        <div className='heroActions'>
          <button>Buy now</button>
          <span>See terms</span>
        </div>
      </div>
      <div className='heroRight'>
        <SiAdobecreativecloud className='heroIcon' />
      </div>
    </section>
  );
};

export default Hero;
