import React from 'react'
import '../../styles/SecuritySettings.scss';
import SecurityIcon from '@material-ui/icons/Security';
import PersonlIdentity from '../otc/PersonelIdentity';
import LoginPasswordBadge from '../otc/LoginPasswordBadge';
import EmailBadge from '../otc/EmailBadge';
import FoundPassword from '../otc/FoundPassword';



export const SecuritySettingsWrapper = () => {
    return(
            <div>
                    
                    <header className={`HeaderDrawer`}>
                            <span className={`circuleUsePicture`}></span>
                            <div className={`FlexLeft`}>
                                <span className={`UserName`}>UserName</span>
                                <span className={`Email`}>user@gmail.com</span>                            
                            </div>
                            
                            <div className={`FlexRight`}>
                                <SecurityIcon style={{ color : 'orange', marginRight: '5px'}} />
                                <span style={{ color : 'white', fontWeight: 'bold'}}>Security Level: <b style={{color: 'orange'}}>Medium</b></span>
                                                        
                            </div>
                            
                    </header>
                    <PersonlIdentity />

                    <EmailBadge />

                    <LoginPasswordBadge/>
                    <FoundPassword/>
            </div>
        )
}
