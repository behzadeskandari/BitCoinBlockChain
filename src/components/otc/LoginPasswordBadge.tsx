import React from 'react'

import LockIcon from '@material-ui/icons/Lock';

import { Button, TextField } from '@material-ui/core';


export default function LoginPasswordBadge(){
    return(
        <>
          <section className={`BodyDrawer`}>
                                        <div className={`PersonalIndentity`}>
                                                <span className={`PersonaIdentityBadge`}>
                                                      <LockIcon style={{ color : 'orange', marginRight: '5px'}}/>  
                                                </span>
                                                <span style={{color : 'grey', height: '3em', lineHeight: '2.5',marginLeft: '11px'}}>
                                                        <b style={{color: 'white'}}>Login Password |</b> Use When Logging in To The Platform
                                                </span>
                                        <span style={{padding: '10px' ,color: 'white', textAlign: 'center' ,width: '18%',display: 'flex',flexFlow: 'row wrap', justifyContent: 'center',marginRight: '10px',alignItems: 'center', backgroundColor: 'orange', borderRadius: '10px', marginLeft: '250px'}}>Modify</span>
                                        </div>
                                         {/* <div className={`InputHolder`}>
                                              <div className={``}>
                                                    <span>Old Login Password</span>
                                                    <span>New Login Password</span>
                                                    <span>Confirm New Password</span>
                                              </div>
                                              <div className={``}>
                                                            <TextField/>
                                                            <TextField/>
                                                            <TextField/>               
                                              </div>
                                        </div>
                                              <div className={``}>
                                                      <Button></Button>
                                                      <Button></Button>
                                              </div> */}
          </section>
          
        </>
    )
}