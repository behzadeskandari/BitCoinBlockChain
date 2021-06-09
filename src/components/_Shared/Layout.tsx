import  React,{useState} from 'react';

import '../../styles/Cms.scss';
import Home from '../../pages/Home';

import NavigationMenu from './NavigationMenu';
import { Route, Switch } from 'react-router';
import Exchange from '../exchange/Exchange';
import C2CExchange from '../../pages/C2CExchange';
import OTC from '../otc/OTC';
import ProLab from '../../pages/ProLab';
import Announcment from '../../pages/Announcment';
import PromotingPartner from '../../pages/PromotingPartner';
import Login from '../../pages/Login';
import useLocalStorage from '../../containers/useLocalStorage';
import SignUp from '../../pages/SignUp';
import CustomTabsWrapper from './CustomTabsWrapper';


const Layout : React.FC = () => {
 // const [id,setId] = useLocalStorage('id');
     
    return(
        <div> 
            <div className={`displayFlex`}>
                <NavigationMenu />           
                        <CustomTabsWrapper/>
                    
                    <Route exact path={'/'} component={Login}> <Login/>  </Route>
                    {/* <Route exact path={'/'} component={CustomTabsWrapper}>  </Route> */}
                    <Route  path={'/SignUp'} component={SignUp}> <SignUp/>  </Route>
                    <Route  path={'/Home'} component={Home}> <Home/>  </Route>
                    <Route  path={'/Exchange'} component={Exchange}> <Exchange/> </Route>
                    <Route  path={'/C2CExchange'} component={C2CExchange}> <C2CExchange/> </Route>
                    <Route  path={'/OTC'} component={OTC} > <OTC /> </Route>
                    <Route  path={'/ProLab'} component={ProLab} > <ProLab/> </Route>
                    <Route  path={'/Home'} component={Announcment} > <Announcment/> </Route>
                    <Route  path={'/Home'} component={PromotingPartner}> <PromotingPartner/> </Route> 
                                 
            </div>
        </div>
    );

}

export default Layout;