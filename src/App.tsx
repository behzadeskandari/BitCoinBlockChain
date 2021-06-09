import { FiberPin } from '@material-ui/icons';
import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import BackGround from './assets/Picture/background.png';
import Layout from './components/_Shared/Layout';
import './styles/App.css';
import {useSelector} from 'react-redux';
import {translate} from './Translations/index';
import {RootState} from './config/store/index';
import Logo from './components/Svg/Logo.svg';
//import useLocalStorage from './containers/useLocalStorage.js';



const App : FC = () => {
 
     const {language} = useSelector((state : RootState) => state.lang);
     
  return (
    <>
    <div className="App" style={{ backgroundImage : `url(${BackGround})` ,backgroundSize: '100% 100%', height: '100%'}}>
          <BrowserRouter basename="/App"> {translate("home",language)}
              <img src={Logo} style={{position: 'absolute' , left: '11px' , top: '9px'}}/>
              <Layout />

         </BrowserRouter>
    </div>
    </>
  );
}

export default App;
