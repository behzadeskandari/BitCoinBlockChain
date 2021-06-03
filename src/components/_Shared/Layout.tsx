import  React,{useState} from 'react';
import NavigationMenu from './NavigationMenu';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import SiteFooter from './SiteFooter';
import { Button, Tab, Tabs } from '@material-ui/core';
import CSS from 'csstype';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { SecuritySettings } from '../../pages/SecuritySettings';





const Layout : React.FC = () => {
  
    return(
        <div> 
            <div className={`displayFlex`}>

                    <NavigationMenu/>
                    {/* <Login />  */}
                    {/* <SignUp /> */}

                  <Tabs className={`displayFlex`}> 
                       
                        <SecuritySettings/>

                  </Tabs>
                    <SiteFooter />
            </div>
        </div>
    );

}

export default Layout;