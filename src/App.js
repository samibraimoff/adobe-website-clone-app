import React, { Fragment } from 'react';

import Header from './components/header/Header';

import './App.scss';
import Hero from './components/hero/Hero';
import HeroLinks from './components/herolinks/HeroLinks';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
      <HeroLinks />
    </Fragment>
  );
};

export default App;
