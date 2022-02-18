import React, { Fragment } from 'react';

import Header from './components/header/Header';

import './App.scss';
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Hero />
    </Fragment>
  );
};

export default App;
