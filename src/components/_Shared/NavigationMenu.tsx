
import  React, {Fragment,useCallback , useState, useEffect , useRef , FC } from 'react';
import {Router, Switch , Route} from 'react-router';
import {useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../config/store';
import {setLanguage} from '../../config/store/actions/langActions';
import {translate} from '../../Translations/index';
import {CustomLogOut} from './CustomLogOut';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme } from '@material-ui/core/styles';
import '../../styles/NavigationMenu.scss';
import { BrowserRouter } from 'react-router-dom';

interface HeaderProps {
  fixed? : boolean;
  transparent?: boolean;
}


const useStyles = makeStyles((theme : Theme)  => ({
  container: {
    padding: theme.spacing(3),
  },
}));
interface ILinkInterface{
  name : ['Home','Exchange','C2C Exchange','OTC','Pro Lab','Promoting Partner ','Announcment']
}
interface IListProps{

}
interface IListState{
  names : Array<string>
}

      export default class ListLink extends React.Component<IListProps,IListState>
      {
            constructor(props : IListProps)
            {
              super(props);
              this.state = {
                names :  ['Home','Exchange','C2C Exchange','OTC','Pro Lab','Promoting Partner ','Announcment']
              }
            }
            render(){
              return (
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
                <CustomLogOut />
                </div>
                
              )
            }

      }
      
// const NavigationMenu : FC<HeaderProps> = ({fixed , transparent}) => {
//     const classes = useStyles();
//     const {language} = useSelector((state : RootState) => state.lang)
//     const dispatch = useDispatch();
//     const [showDropdown,setShowDropDown] = useState(false);
//     const dropdownEl = useRef<HTMLUListElement>(null);
//     const [useLINK, SetLINK] = useState<Array<ILinkInterface>>();
//     let headerClass = 'header';

//     if(fixed){
//       headerClass += ' header--fixed';
//     }

//     if(transparent){
//       headerClass += ' header--transparent';
//     }

//     const handleCliclOutside = useCallback((e)=> {
//         if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current){
//           setShowDropDown(false);
//         }
//     }, [showDropdown,setShowDropDown,dropdownEl]);

//     useEffect( () => {
//       document.addEventListener('click',handleCliclOutside);

//       return () => {
//         document.removeEventListener('click',handleCliclOutside);
//       }

//     },[handleCliclOutside])

//     const ChooseLanguageHandler = (value : string) => {
//         setShowDropDown(false);
//         dispatch(setLanguage(value));
//     }


//     return(
//         <div className={`MenuWrapper ${headerClass}`}>
//         <span className={`LogoBold`}>Yukabex <span className={`LogoGrey`}>Smart Trading Platform</span></span>
//         <nav className={`navMenu`}>
//              <ul>


//                     {/* <Route to="/"> {translate("home",language)}</Route>
//                     <Route to="/Exchange"> {translate("OTC",language)}</Route>
//                     <Route to="/C2CExchange"> {translate("OTC",language)}</Route>
//                     <Route to="/OTC"> {translate("OTC",language)}</Route>
//                     <Route to="/ProLab"> {translate("OTC",language)}</Route>
//                     <Route to="/PromotingPartner"> {translate("OTC",language)}</Route>
//                     <Route to="/Announcment"> {translate("OTC",language)}</Route>
//                   */}
//                <li onClick={() => setShowDropDown(true)}>
//                 {language}  
//                 {showDropdown && <ul className="dropdown" ref={dropdownEl}>
//                   <li onClick={() => ChooseLanguageHandler('EN')}>EN</li>
//                   <li onClick={() => ChooseLanguageHandler('FA')}>FA</li>
                  
//                   </ul>}
//                 </li> 
//              </ul>
            
//              {/* <ul>
//                 <li>
//                 Home
//                 </li>    
                
//                 <li>
//                 Exchange
//                 </li>    
                
//                 <li>
//                 C2C Exchange
//                 </li>    
                
//                 <li>
//                 OTC
//                 </li>    
//                 <li>
//                 Pro Lab
//                 </li>    
   
//                 <li>
//                 Promoting Partner 
//                 </li>  
                
//                 <li>
//                 Announcment  
//                 </li>  
                
//                 <li onClick={() => setShowDropDown(true)}>
//                 {language}  
//                 {showDropdown && <ul className="dropdown" ref={dropdownEl}>
//                   <li onClick={() => ChooseLanguageHandler('EN')}>EN</li>
//                   <li onClick={() => ChooseLanguageHandler('FA')}>FA</li>
                  
//                   </ul>}
//                 </li>  
//              </ul>   */}
//         </nav>
//         <div>
//             <button className={`BtnOrange`}>
//                 Login / SignApp
//             </button>
//         </div>
//         </div>
//     );

// }

// export default NavigationMenu;