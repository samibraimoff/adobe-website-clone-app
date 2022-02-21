import React, { Fragment } from 'react';

import Header from './components/header/Header';

import './App.scss';
import Hero from './components/hero/Hero';
import HeroLinks from './components/herolinks/HeroLinks';
import Features from './components/features/Features';
import Plans from './components/plans/Plans';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HeroLinks />
      <Features />
      <Plans />
    </Fragment>
  );
};

export default App;
