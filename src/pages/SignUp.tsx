import * as React from 'react';

import  {CustomButtonSignUp}  from '../components/_Shared/CustomButton';
import {EmailInput , PasswordInput, VerificationCodeInput,InviteInput} from '../components/_Shared/CustomInput';

import '../styles/SignUp.scss'

function SignUp() {
    return(
          <div className="flex-center">
            <span className={`LoginHeader`}>SIGN UP</span>   
     
        <EmailInput PropValue={`enter your email address`} labeltext={`Email`} >
         
        </EmailInput>    
            <VerificationCodeInput   PropValue={`enter your code`} labeltext={`Verification Code`}  >

        </VerificationCodeInput>
        <PasswordInput PropValue={`enter your password`} labeltext={`Password`} >

        </PasswordInput>
      
          <PasswordInput  PropValue={`confirm your password`} labeltext={`Confirm Password`} >

        </PasswordInput>
         <InviteInput  PropValue={`Enter your Code`} labeltext={`Invite Code`} >

        </InviteInput>
        <CustomButtonSignUp />
       <div className={`flexrow `} style={{padding: "10px"}}>
            <span style={{color: "white"}}>Or Login</span><a style={{color: 'orange',marginLeft: "10px", fontSize: "16px", fontWeight: "bolder"}}>Here</a>
        </div>
        </div>
    );

}

export default SignUp;