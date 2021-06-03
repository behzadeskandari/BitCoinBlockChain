import React from 'react'


import { Accordion } from '../components/_Shared/CustomAccordions';

interface ISecuritySettingsProps{
classProp : string
}

export const SecuritySettings = () => {
    return(
            <>
               <Accordion title={`Account`} classProp={`Account`}>
                                    <a> Security Setting </a>
                                    <a> AccountSeeting </a>
                        </Accordion>
                        <Accordion title={`Finance`} classProp={`Finance`}>
                                    <a>Finance </a>
                                    <a>Currency Assets </a>
                        
                                    <a>Bill Details </a>
                                    <a>Quick Exchange </a>
                                    <a>Deposit </a>
                                    <a>Widthdrawal </a>
                        
                        </Accordion>
                        
                        <Accordion title={`Exchange`} classProp={`Exchange`}>
                                    <a> </a>
                                    <a> </a>
                        </Accordion>
                        
                        <Accordion title={`API Key`} classProp={`APIKey`}>
                                    <a> </a>
                                    <a> </a>
                        </Accordion>
            </>
        )
}