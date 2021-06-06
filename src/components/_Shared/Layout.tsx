import  React,{useState} from 'react';

import '../../styles/Cms.scss';
import Home from '../../pages/Home';

import NavigationMenu from './NavigationMenu';


const Layout : React.FC = () => {
  
    return(
        <div> 
            <div className={`displayFlex`}>
                <NavigationMenu />           
                <Home />      

            </div>
        </div>
    );

}

export default Layout;