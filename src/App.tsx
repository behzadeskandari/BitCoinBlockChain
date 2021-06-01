import React, { FC } from 'react';
import BackGround from './assets/PIcture/background.png';
import Layout from './components/_Shared/Layout';
import './styles/App.css';

const App : FC = () => {
  return (
    <>
    <div className="App" style={{ backgroundImage : `url(${BackGround})`}}>
        <Layout />
    </div>
    </>
  );
}

export default App;
