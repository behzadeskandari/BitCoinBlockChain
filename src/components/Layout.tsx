import * as React from 'react';
import NavigationMenu from './NavigationMenu';
import Login from './pages/Login';
import SignUp from './pages/SignUp';




function Layout() {
    return(
        <div className={`displayFlex`}>
                {/*
                */}
                <NavigationMenu />
                {/* <Login />  */}
                <SignUp />
        </div>
    );

}

export default Layout;