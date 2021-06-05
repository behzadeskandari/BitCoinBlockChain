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



export default function CustomTabsWrapper(){
    return(
        <>
        <div>
                    <Tabs className={`displayFlex`} style={{height: '85vh'}}> 
                        <AccordionPages/>
                    </Tabs>
        </div>
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
        </div>
        </>
    )
}