
import  React, {Fragment,useCallback , useState, useEffect , useRef , FC } from 'react';
import {NavLink , Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {RootState} from '../../config/store';
import {setLanguage} from '../../config/store/actions/langActions';
import {translate} from '../../Translations/index';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../../styles/NavigationMenu.scss';

interface HeaderProps {
  fixed? : boolean;
  transparent?: boolean;
}


const useStyles = makeStyles((theme)  => ({
  container: {
    padding: theme.spacing(3),
  },
}));

const NavigationMenu : FC<HeaderProps> = ({fixed , transparent}) => {
    const classes = useStyles();
    const {language} = useSelector((state : RootState) => state.lang)
    const dispatch = useDispatch();
    const [showDropdown,setShowDropDown] = useState(false);
    const dropdownEl = useRef<HTMLUListElement>(null);

    let headerClass = 'header';

    if(fixed){
      headerClass += ' header--fixed';
    }

    if(transparent){
      headerClass += ' header--transparent';
    }

    const handleCliclOutside = useCallback((e)=> {
        if(showDropdown && e.target.closest('.dropdown') !== dropdownEl.current){
          setShowDropDown(false);
        }
    }, [showDropdown,setShowDropDown,dropdownEl]);

    useEffect( () => {
      document.addEventListener('click',handleCliclOutside);

      return () => {
        document.removeEventListener('click',handleCliclOutside);
      }

    },[handleCliclOutside])

    const ChooseLanguageHandler = (value : string) => {
        setShowDropDown(false);
        dispatch(setLanguage(value));
    }


    return(
        <div className={`MenuWrapper ${headerClass}`}>
        <span className={`LogoBold`}>Yukabex <span className={`LogoGrey`}>Smart Trading Platform</span></span>
        <nav className={`navMenu`}>
             <ul>
                <li>
                Home
                </li>    
                
                <li>
                Exchange
                </li>    
                
                <li>
                C2C Exchange
                </li>    
                
                <li>
                OTC
                </li>    
                <li>
                Pro Lab
                </li>    
   
                <li>
                Promoting Partner 
                </li>  
                
                <li>
                Announcment  
                </li>  
                
                <li onClick={() => setShowDropDown(true)}>
                {language}  
                {showDropdown && <ul className="dropdown" ref={dropdownEl}>
                  <li onClick={() => ChooseLanguageHandler('EN')}>EN</li>
                  <li onClick={() => ChooseLanguageHandler('FA')}>FA</li>
                  
                  </ul>}
                </li>  
             </ul>  
        </nav>
        <div>
            <button className={`BtnOrange`}>
                Login / SignApp
            </button>
        </div>
        </div>
    );

}

export default NavigationMenu;