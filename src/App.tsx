import React from 'react';
import BackGround from './assets/PIcture/background.png';
import Layout from './components/Layout';
import './styles/App.css';

function App() {
  return (
    <>
    <div className="App" style={{ backgroundImage : `url(${BackGround})`}}>
        <Layout />
    </div>
    </>
  );
}

export default App;
