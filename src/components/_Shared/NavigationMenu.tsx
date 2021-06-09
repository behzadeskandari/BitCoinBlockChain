
import  React from 'react';
import { CustomLogOut } from './CustomLogOut';
import '../../styles/NavigationMenu.scss';
import { CustomLogIn } from './CustomLogIn';
// import { SecuritySettingsWrapper } from '../cms/SecuritySettings';
// import  AccountSettingWrapper  from '../cms/AccountSetting';
// import { CurrencyAssetsWrapper } from '../cms/CurrencyAssets';
// import { BillDetailsWrapper } from '../cms/BillDetails';
// import { QuickExchangeWrapper } from '../cms/QuickExchange';
// import { DepositWrapper } from '../cms/Deposit';
// import { Widthdraw } from '../uc/Withdraw';
// import APIKey from '../cms/APIKey';
// import Exchange from '../exchange/Exchange';
import { Link, Route } from 'react-router-dom';

// interface HeaderProps {
//   fixed? : boolean;
//   transparent?: boolean;
// }
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
                names :  ['Home','Exchange','C2C Exchange','OTC','Pro Lab','Promoting Partner','Announcment'],
                logOut : true
              }
            }
            render(){
              return (
                <div>
                <div className={`flexy`}>
                  <div style={{display: 'flex', flexFlow: 'column', marginLeft: '95px', paddingTop: '10px',width: '11em'}}>
                        <span style={{ color: 'white'}}>Yukabex</span>
                        <span style={{ color: 'grey'}}>Smart Trading Platform</span>  
                  </div>

                  <ul className="list-group">
                        {this.state.names.map(name => {
                            return <Link to={name} className={`list-group-item`}>{name}</Link>
                        })}
                  </ul>
                  
                  
                  { this.state.logOut === false ? <CustomLogOut /> :  <CustomLogIn /> }
                  </div>
                </div>
            )
        }
}
      
