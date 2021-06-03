import React from 'react'



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
export const CustomLogOut = () => {
    
        return ( 
            <div style={{width: '25%', float: 'right', display: 'flex', flexFlow: 'row wrap',justifyContent: 'end' }}>
                <button style={{ color: 'white', backgroundColor: 'orange', border: 'none' , padding: '10px', borderRadius: '10px', marginTop: '10px' }}>Login/Sign App</button>
            </div>
         );
    
}
 