import React from 'react';
import Routes from 'components/Routes';
import Header from 'components/Header';

import "./app.scss";

const App = () => {
  return (

    <div className="app">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
