import React,{useState} from 'react'

import LockIcon from '@material-ui/icons/Lock';

import { Button, TextField } from '@material-ui/core';
import { Visibility } from '@material-ui/icons';


export default function LoginPasswordBadge(){
     const [VisibleValue,SetVisible] = useState(false);
     const InputHolderToggler = () => {
           console.log('fire')
           SetVisible(!VisibleValue);
     }                 
      return(
        <>
          <section className={`BodyDrawer`}>
                                        <div className={`PersonalIndentity`}>
                                                <span className={`PersonaIdentityBadge`}>
                                                      <LockIcon style={{ color : 'orange', marginRight: '5px'}}/>  
                                                </span>
                                                <span style={{color : 'grey', height: '3em', lineHeight: '2.5',marginLeft: '11px', width: '50%'}}>
                                                        <b style={{color: 'white'}}>Login Password |</b> Use When Logging in To The Platform
                                                </span>
                                        <button onClick={()=> InputHolderToggler()}
                                        style={{padding: '10px',
                                          color: 'white',
                                          textAlign: 'center' ,
                                          width: '15%',
                                          display: 'flex',
                                          flexFlow: 'row wrap',
                                          justifyContent: 'center',
                                          marginRight: '10px',
                                          alignItems: 'center',
                                          backgroundColor: 'orange',
                                          borderRadius: '7px',
                                          marginLeft: '390px'
                                          }}>Modify</button>
                                        </div>
                                         
                                              
          </section>
                                          {VisibleValue === true ? (

          <div className={`InputHolder`} style={{display: 'flex',flexFlow: 'row wrap',width: '100%', marginTop : '32px',backgroundColor: '#212634', borderRadius: '7px', alignContent: 'center',textAlign: 'center', alignSelf : 'center'}}>
                                              <div className={``} style={{width: '97%' , display: 'flex', justifyContent: 'space-between'}}>
                                                      
                                                    <span style={{width : '28%',color: 'white'}}>Old Login Password <TextField style={{color: 'white',width: '22em'}} defaultValue={"Enter Your Old Login Password"}/></span>
                                                    <span style={{width : '28%',color: 'white'}}>New Login Password <TextField style={{color: 'white',width: '22em'}} defaultValue={"Enter Your New Login Password"}/></span>
                                                    <span style={{width : '28%',color: 'white'}}>Confirm New Password <TextField style={{color: 'white',width: '22em'}} defaultValue={"Confirm Your New Login Password"}/></span>
                                              </div>
                                              <div className={``}>
                                                      <Button></Button>
                                                      <Button></Button>
                                              </div>
            </div>
            ) : (
                  <div></div>
            )}
        </>
    )
}