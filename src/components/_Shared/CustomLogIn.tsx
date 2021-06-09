




import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
// export interface CustomLogOutProps {
//     Email: string,
//     password : string,
//     Login : boolean,
//     signIn : boolean
// }
 
// export interface CustomLogOutState {
//     Email: string| number,
//     password : string| number,
//     Login : boolean,
//     signIn : boolean
// }
 //<CustomLogOutProps, CustomLogOutState>
export const CustomLogIn = () => {
        return ( 
            <div style={{display: 'flex',flexFlow: 'row-reverse', lineHeight: '2'}}>
            <button style={{width: '40px', height: '40px', float: 'right', display: 'flex', flexFlow: 'row wrap',justifyContent: 'end',color: 'white', backgroundColor: 'orange', border: 'none' , padding: '10px', borderRadius: '100%', marginTop: '10px' }}>

            </button>
            {/* <span style={{color: 'orange',  marginTop: '10px',paddingLeft: '10px', paddingRight: '10px'}}>UserName</span> */}
            <AttachMoneyIcon style={{color: 'orange' , marginTop: '10px',paddingTop: '6px'}}/>
            <MeetingRoomIcon style={{color: 'orange', marginTop: '10px',paddingTop: '6px'}}/>
            </div>
         );
}
 