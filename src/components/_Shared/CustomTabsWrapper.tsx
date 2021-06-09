import React from 'react'
import { AccordionPages } from '../../pages/AccordionPages';
import { Tabs } from '@material-ui/core';
import { Route } from 'react-router';
import AccountSettingWrapper from '../cms/AccountSetting';
import { SecuritySettingsWrapper } from '../cms/SecuritySettings';
import { CurrencyAssetsWrapper } from '../cms/CurrencyAssets';
import { BillDetailsWrapper } from '../cms/BillDetails';
import { QuickExchangeWrapper } from '../cms/QuickExchange';
import { DepositWrapper } from '../cms/Deposit';
import { Widthdraw } from '../uc/Withdraw';
import APIKey from '../cms/APIKey';
import Exchange from '../exchange/Exchange';
import Home from '../../pages/Home';
import C2CExchange from '../../pages/C2CExchange';
import OTC from '../otc/OTC';
import ProLab from '../../pages/ProLab';
import PromotingPartner from '../../pages/PromotingPartner';
import Announcment from '../../pages/Announcment';



export default function CustomTabsWrapper(){
    return(
        <>
        <div>
                    <div className={`SecurityBox`}>
                                    <Route exact path={'/SecuritySettings'} component={SecuritySettingsWrapper}> <SecuritySettingsWrapper/> </Route>
                                    <Route path={'/AccountSetting'} component={AccountSettingWrapper}> <AccountSettingWrapper /> </Route>
                                    <Route path={'/CurrencyAssets'} component={CurrencyAssetsWrapper}> <CurrencyAssetsWrapper /> </Route>
                                    <Route path={'/BillDetails'} component={BillDetailsWrapper}> <BillDetailsWrapper /> </Route>
                                    <Route path={'/QuickExchange'} component={QuickExchangeWrapper}> <QuickExchangeWrapper /> </Route>
                                    <Route path={'/Deposit'} component={DepositWrapper}> <DepositWrapper /> </Route>
                                    <Route path={'/Widthdrawal'} component={Widthdraw}> <Widthdraw /> </Route>
                                    <Route path={'/APIKey'} component={APIKey}> <APIKey /> </Route>
                                    <Route path={'/Exchange'} component={Exchange}> <Exchange /> </Route>
                                    <Route path={'/Home'} component={Home}> <Home /> </Route>
                                    <Route path={'/C2CExchange'} component={C2CExchange}> <C2CExchange /> </Route>
                                    <Route path={'/OTC'} component={OTC}> <OTC /> </Route>
                                    <Route path={'/ProLab'} component={ProLab}> <ProLab /> </Route>
                                    <Route path={'/PromotingPartner'} component={PromotingPartner}> <PromotingPartner /> </Route>
                                    <Route path={'/Announcment'} component={Announcment}> <Announcment /> </Route>
                                    
                    </div>
                    <Tabs className={`displayFlex`} style={{height: '85vh'}}> 
                        <AccordionPages/>
                      
                    </Tabs>
        </div>
      
        </>
    )
}