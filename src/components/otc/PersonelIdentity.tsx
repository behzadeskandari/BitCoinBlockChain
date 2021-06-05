import React from 'react'

import PermIdentityIcon from '@material-ui/icons/PermIdentity';


export default function PersonlIdentityBadge(){
    return(
        <>
          <section className={`BodyDrawer`}>
                <div className={`PersonalIndentity`}>
                  <span className={`PersonaIdentityBadge`}>
                   <PermIdentityIcon style={{color: 'orange'}}/>
                  </span>
                 <span style={{color : 'grey', height: '3em', lineHeight: '2.5',marginLeft: '11px'}}>
                      <b style={{color: 'white'}}>Personal Identity |</b> To Protect Your Account Security, Please Compelete Real-Name Certification
                 </span>
                <span style={{color: 'orange',width: '21%',display: 'flex',flexFlow: 'row wrap', justifyContent: 'flex-end',alignItems: 'center'}}>Pending ...</span>
                </div>
          </section>
        </>
    )
}