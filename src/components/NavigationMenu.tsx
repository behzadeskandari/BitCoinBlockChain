
import  React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/NavigationMenu.scss';

const useStyles = makeStyles((theme)  => ({
  container: {
    padding: theme.spacing(3),
  },
}));

function NavigationMenu() {
    const classes = useStyles();
    return(
        <div className={`MenuWrapper`}>
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
                
                <li>
                Eng  
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