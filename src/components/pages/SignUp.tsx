import * as React from 'react';

import  {CustomButtonSignUp}  from '../CustomButton';
import {EmailInput , PasswordInput} from '../CustomInput';

import '../../styles/SignUp.scss'

function SignUp() {
    return(
          <div className="flex-center">
            <span className={`LoginHeader`}>SIGN UP</span>   
     
        <EmailInput PropValue={`enter your email address`} labeltext={`Email`} >
         
        </EmailInput>    
        <PasswordInput  PropValue={`enter your code`} labeltext={`Verification Code`} >

        </PasswordInput>
          <PasswordInput  PropValue={`enter your password`} labeltext={`Password`} >

        </PasswordInput>
          <PasswordInput  PropValue={`confirm your password`} labeltext={`Confirm Password`} >

        </PasswordInput>
         <PasswordInput  PropValue={`Enter your Code`} labeltext={`Invite Code`} >

        </PasswordInput>
        <CustomButtonSignUp />
       <div className={`flexrow `} style={{padding: "10px"}}>
            <span style={{color: "white"}}>OR</span><a style={{color: 'orange',marginLeft: "10px", fontSize: "12px"}}> Register Here</a>
        </div>
        </div>
    );

}

export default SignUp;