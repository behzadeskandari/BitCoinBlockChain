import React from 'react'
import { Link } from 'react-router-dom';



import { Accordion } from '../components/_Shared/CustomAccordions';

// interface ISecuritySettingsProps{
// classProp : string
// }


export function AccordionPages() {
    return (
        <>
                        <Accordion title={`Account`} classProp={`Account`}>
                                     <Link to="/SecuritySettings">SecuritySettings</Link>
                                     <Link to="/AccountSetting">AccountSetting</Link>
                        </Accordion>
                        <Accordion title={`Finance`} classProp={`Finance`}>

                                     <Link to="/CurrencyAssets">Currency Assets</Link>
                                     <Link to="/BillDetails">Bill Details </Link>
                                     <Link to="/QuickExchange">Quick Exchange</Link>
                                     <Link to="/Deposit">Deposit</Link>
                                     <Link to="/Widthdrawal">Widthdrawal</Link>
                        
                        </Accordion>
                        
                        <Accordion title={`Exchange`} classProp={`Exchange`}>

                                     <Link to="/Exchange">Exchange</Link>
                        </Accordion>
                        
                        <Accordion title={`API Key`} classProp={`APIKey`}>
                                    <Link to="/APIKey">APIKey</Link>
                        </Accordion>
        </>
    )
}