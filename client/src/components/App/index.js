import React from 'react';
import Routes from 'components/Routes';
import Header from 'components/Header';
import Footer from 'components/Footer';

import "./app.scss";

const App = () => {
  return (

    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
