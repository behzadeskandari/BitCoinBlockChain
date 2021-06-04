import { FiberPin } from '@material-ui/icons';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackGround from './assets/PIcture/background.png';
import Layout from './components/_Shared/Layout';
import './styles/App.css';
import {useSelector} from 'react-redux';
import {translate} from './Translations/index';
import {RootState} from './config/store/index';

const App : FC = () => {
 
     const {language} = useSelector((state : RootState) => state.lang);
  return (
    <>
    <div className="App" style={{ backgroundImage : `url(${BackGround})`}}>
          <BrowserRouter basename="/App"> {translate("home",language)}
            
              <Layout />

         </BrowserRouter>
    </div>
    </>
  );
}

export default App;
