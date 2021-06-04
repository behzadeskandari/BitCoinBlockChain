import  React,{useState} from 'react';

import '../../styles/Cms.scss';
import Home from '../../pages/Home';



const Layout : React.FC = () => {
  
    return(
        <div> 
            <div className={`displayFlex`}>

                <Home/>      

            </div>
        </div>
    );

}

export default Layout;