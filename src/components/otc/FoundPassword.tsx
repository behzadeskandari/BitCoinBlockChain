import React from 'react'

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';

export default function FoundPassword(){
    return(
        <>
            <section className={`BodyDrawer`}>
                                        <div className={`PersonalIndentity`}>
                                                <span className={`PersonaIdentityBadge`}>
                                                    <AccountBalanceWalletIcon style={{color : 'orange', fontSize : '29px'}} />
                                                </span>
                                                <span style={{color : 'grey', height: '3em', lineHeight: '2.5',marginLeft: '11px'}}>
                                                        <b style={{color: 'white'}}>Found Password |</b>
                                                        When Account Funds Change. You Need To Verify The Funds Password First.
                                                </span>
                                        <span style={{padding: '10px' ,color: 'white', textAlign: 'center' ,width: '18%',display: 'flex',flexFlow: 'row wrap', justifyContent: 'center',marginRight: '10px',alignItems: 'center', backgroundColor: 'orange', borderRadius: '10px', marginLeft: '250px'}}>Modify</span>
                                        </div>
          </section>
        </>
    )

}