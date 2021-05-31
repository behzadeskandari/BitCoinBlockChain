import * as React from 'react';
import NavigationMenu from './NavigationMenu';
import Login from './pages/Login';
import Register from './pages/SignUp';

import classNames from 'classnames'
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from '@material-ui/core/TextField';
import '../styles/CustomInput.scss';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

function EmailInput(props : any) {
    return(
        <div className={`displayFlex`}>
              <div className={`flexrow`}>
               <MailOutlineIcon style={{color  : 'orange'}}/>
               <label style={{color: "white" , marginLeft: "10px", marginBottom: "10px"}} htmlFor={props.labeltext}>{props.labeltext}</label>
              </div>
                <TextField
                style={{color: "white" }}
                id="filled"
             
                defaultValue={props.PropValue}
                variant="filled"
                />
        </div>
    );

}

function PasswordInput(props : any) {
    return(
        <div className={`displayFlex`}>
              <div className={`flexrow`}>
               <LockIcon style={{color  : 'orange'}}/>
               <label style={{color: "white" , marginLeft: "10px", marginBottom: "10px"}} htmlFor={props.labeltext}>{props.labeltext}</label>
              </div>
                <TextField
                style={{color: "white"}}
                id="filled"
             
                defaultValue={props.PropValue}
                variant="filled"
                />
        </div>
    );

}

export  {PasswordInput, EmailInput};