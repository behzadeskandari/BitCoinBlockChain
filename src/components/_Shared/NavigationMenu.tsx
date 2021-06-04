
import  React, {Fragment,useCallback , useState, useEffect , useRef , FC } from 'react';
import {Router, Switch , Route} from 'react-router';

import {CustomLogOut} from './CustomLogOut';

import { makeStyles, Theme } from '@material-ui/core/styles';
import '../../styles/NavigationMenu.scss';
import { CustomLogIn } from './CustomLogIn';
import { SecuritySettingsWrapper } from '../cms/SecuritySettings';
import  AccountSettingWrapper  from '../cms/AccountSetting';

interface HeaderProps {
  fixed? : boolean;
  transparent?: boolean;
}
interface IListProps{

}
interface IListState{
  names : Array<string>;
  logOut? : boolean;
}

      export default class ListLink extends React.Component<IListProps,IListState>
      {
            constructor(props : IListProps)
            {
              super(props);
              this.state = {
                names :  ['Home','Exchange','C2C Exchange','OTC','Pro Lab','Promoting Partner ','Announcment'],
                 logOut : true
              }
            }
            render(){
              return (
                <>
                <div className={`flexy`}>
                <div style={{display: 'flex', flexFlow: 'column', marginLeft: '95px', paddingTop: '10px',width: '11em'}}>
                       <span style={{ color: 'white'}}>Yukabex</span>
                       <span style={{ color: 'grey'}}>Smart Trading Platform</span>  
                </div>
                <ul className="list-group">
                      {this.state.names.map(name => {
                          return <li className={`list-group-item`}>{name}</li>
                      })}
                </ul>
                { this.state.logOut === false ?  <CustomLogIn /> : <CustomLogOut /> }
                
                </div>
                   <div className={`SecurityBox`}>

                                    <Route exact path={'/SecuritySettings'} component={SecuritySettingsWrapper}> SecuritySettings </Route>
                                    <Route path={'/AccountSetting'} component={AccountSettingWrapper}> AccountSetting </Route>

                        </div>

                        </>
              )
            }

      }
      
