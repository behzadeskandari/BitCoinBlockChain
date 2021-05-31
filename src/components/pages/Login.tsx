import { TextField } from '@material-ui/core';
import * as React from 'react';
import '../../styles/Login.scss'
import {CustomButtonLogin} from '../CustomButton';
import {EmailInput , PasswordInput} from '../CustomInput';

function Login() {
    return(
        <div className="flex-center">
            <span className={`LoginHeader`}>LOG IN</span>   
     
        <EmailInput PropValue={`Enter Your Email Address`} labeltext={`Email`} >
         
        </EmailInput>    
        <PasswordInput  PropValue={`Enter Your Password`} labeltext={`Password`} >

        </PasswordInput>
        <CustomButtonLogin />
        <div className={`flexrow `} style={{padding: "10px"}}>
            <span style={{color: "white"}}>OR</span><a style={{color: 'orange',marginLeft: "10px", fontSize: "12px"}}> Register Here</a>
        </div>
        </div>
    );

}

export default Login;