import React from 'react';
import './features.scss';

const Features = () => {
  return (
    <section className='features'>
      <div className='feature1'>
        <div className='feature1-info'>
          <h2>Meet the new Photoshop.</h2>
          <h3>Faster, smarter and easier than ever.</h3>
          <a href='#'>Learn more</a>
        </div>
      </div>

      <div className='feature2'>
        <div className='feature2-info'>
          <h2>Take your photos further.</h2>
          <h3>Creative cloud photography plan.</h3>
          <a href='#'>Learn more</a>
        </div>
      </div>

      <div className='feature3'>
        <div className='feature3-info'>
          <h2>Video editing. The easy way.</h2>
          <h3>
            Take your content further and stand out with the next-level power of
            Premiere Pro.
          </h3>
          <a href='#'>Learn more</a>
        </div>
      </div>

      <div className='feature4'>
        <h2>Explore our creative apps</h2>
        <ul>
          <li>Creative cloud all apps free trial</li>
          <li>See plans and pricing</li>
        </ul>
        <h2>See what you can do</h2>
        <ul>
          <li>Photography</li>
          <li>Graphic design</li>
          <li>Video</li>
          <li>illustration</li>
          <li>UI and UX</li>
          <li>3D and AR</li>
          <li>Social media</li>
        </ul>
      </div>

      <div className='feature5'>
        <div className='feature4-info'>
          <h2>Get it done with acrobat.</h2>
          <h3>Edit, share and e-sign all of your PDFs - all in one place.</h3>
          <a href='#'>Start free trial</a>
        </div>
      </div>
    </section>
  );
};

export default Features;
