import React from 'react'

import MailOutlineIcon from '@material-ui/icons/MailOutline';


export default function EmailBadge(){
    return(
        <>
          <section className={`BodyDrawer`}>
                                        <div className={`PersonalIndentity`}>
                                                <span className={`PersonaIdentityBadge`}>
                                                      <MailOutlineIcon style={{color : 'orange'}}/>   
                                                </span>
                                                <span style={{color : 'grey', height: '3em', lineHeight: '2.5',marginLeft: '11px'}}>
                                                        <b style={{color: 'white'}}>Email |</b> user@gmail.com
                                                </span>
                                        <span style={{color: 'orange',width: '75%',display: 'flex',flexFlow: 'row wrap', justifyContent: 'flex-end',alignItems: 'center'}}> Binded </span>
                                        </div>
          </section>
        </>
    )
}