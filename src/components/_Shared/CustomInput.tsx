import * as React from 'react';

import TextField from '@material-ui/core/TextField';
import '../../styles/CustomInput.scss';
import LockIcon from '@material-ui/icons/Lock';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';

import AddIcon from '@material-ui/icons/Add';


function VerificationCodeInput(props : any) {
    return(
        <div className={`displayFlex`}>
              <div className={`flexrow`}>
               <FormatListNumberedIcon style={{color  : 'orange'}}/>
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

function InviteInput(props : any) {
    return(
        <div className={`displayFlex`}>
              <div className={`flexrow`}>
               <AddIcon style={{color  : 'orange'}}/>
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

export  {PasswordInput, EmailInput,VerificationCodeInput,InviteInput};