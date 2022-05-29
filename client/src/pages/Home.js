import React from 'react';
import Form from 'components/Form';
import Members from 'components/Members';
import './home.scss';

const Home = () => {
  return (
    
      <main className='home'>
        <Form />
        <Members />
      </main>
  );
};

export default Home;