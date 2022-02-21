import React, { Fragment } from 'react';

import Header from './components/header/Header';

import './App.scss';
import Hero from './components/hero/Hero';
import HeroLinks from './components/herolinks/HeroLinks';
import Features from './components/features/Features';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HeroLinks />
      <Features />
    </Fragment>
  );
};

export default App;
