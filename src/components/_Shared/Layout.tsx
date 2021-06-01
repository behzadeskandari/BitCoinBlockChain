import * as React from 'react';
import NavigationMenu from './NavigationMenu';
import Login from '../../pages/Login';
import SignUp from '../../pages/SignUp';
import SiteFooter from './SiteFooter';



const Layout : React.FC = () => {
    return(
        <div> 
            <div className={`displayFlex`}>

                    <NavigationMenu />
                    {/* <Login />  */}
                    <SignUp />
                    <SiteFooter />
            </div>
        </div>
    );

}

export default Layout;