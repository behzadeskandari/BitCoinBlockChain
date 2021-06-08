import React from 'react'

import  '../styles/AboutYokaBexSection.scss';
import Information from '../components/Svg/Information.svg'

export default function AboutYokaBexSection(){
    return (
        <section className={`AboutYokaBexSection`}>
                    <img src={Information}/>
                    <h2 className={`whiteHeader`}>ABOUT YUKABEX</h2>
                    <h6 className={`SecondHeader`}>Honest | Fair | Enthusiasm | Open </h6>
                    <p className={`ColorGrey`}>Yukabex Was Founded By A Group Of Early Bitcoin Participants And Geeks. The Core Memebers Of The Team Are From Well-Known Enterprises Such As
                    Google, Microsoft, Alibaba, Tencent And So On . It Has Deep Research And Development Strength And Rich Experience In Internet Product Operation.</p>
                    <br/>
                    <p className={`ColorGrey`}>Yukabex Is Located In The Basic Service Provider Of Block Chain. Dedicated To Providing High-Quality Encrypted Assets Trading Platform For Global
                    Users. Adhering To The Basic Principle Of "DO NOT BE EVIL", Upholding Honest Fair And Enthusiastic Service To Customers,And Welcoming All
                    Partners/Projects That Are Beneficial To The Fundomental interests of Users With An Open Attitude.</p> 
        </section>
    )
}