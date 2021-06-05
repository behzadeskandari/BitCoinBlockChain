import React from 'react'


import '../../styles/AboveTheFold.scss';


export default function AboveTheFold(){
    return(
        <div className={`AboveTheFoldSection`}>
            <h2>The Most Trusted Platform For Trading And Cryptocurencies</h2>
            <span style={{color: 'grey', marginBottom: '10px'}}>We Offer Newbies And Professionals The Possibillity To Trade A Variety Of Digital</span>
            <span style={{color: 'grey', marginBottom: '10px'}}>Assets On A Highly Secure, Insurance-Backed Exchange Platform</span>
            <div style={{ margin: '10px'}}>
                <button className={`AboveTheFoldLearnMore`}>LEARN MORE</button>
                
                <button className={`AboveTheFoldHelp`}>HELP</button>    
            </div>       
        </div>
    )

}

