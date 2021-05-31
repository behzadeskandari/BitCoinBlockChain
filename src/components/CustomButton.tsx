import * as React from 'react';
import NavigationMenu from './NavigationMenu';
import Login from './pages/Login';
import Register from './pages/SignUp';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import buttonStyle from "../assets/Jss/ButtonStyle";
import { CheckBox } from '@material-ui/icons';






function CustomButtonLogin() {
    return(
        <div className={`displayFlex`}>
            <span style={{color: "grey", textAlign: "right" , fontSize: "13px" ,paddingTop: '13px'}}>Forget Password</span>
            <Button   className={`BtnOrange`} style={{ width: '20em',backgroundColor : 'orange', color : "white" ,paddingLeft: "14px", paddingRight : "14px" , marginTop: "9px" , marginBottom: '15px'}}>
                 LOG IN
            </Button>
        </div>
    );

}

function CustomButtonSignUp() {
    return(
        <div className={`displayFlex`}>
            <div>
              <CheckBox  style={{color :"white" , backgroundColor: "white"}}/>
            <span style={{color: "grey", textAlign: "right" , fontSize: "13px" ,paddingTop: '13px',textAlign: 'left'}}>i have read and agree <b style={{color: "orange"}}>User Management</b></span>
            </div>
            <Button   className={`BtnOrange`} style={{ width: '20em',backgroundColor : 'orange', color : "white" ,paddingLeft: "14px", paddingRight : "14px" , marginTop: "9px" , marginBottom: '15px'}}>
                 REGISTER
            </Button>
        </div>
    );

}


export  {CustomButtonLogin  , CustomButtonSignUp}