import React from 'react'

import GuidSvg from '../Svg/GuidSvg.svg';
import DollarSign from '../Svg/DollarSign.svg'
import minichart from '../Svg/minichart.svg'
import CubeSvg from '../Svg/CubeSvg.svg'
import Sheild from '../Svg/Sheild.svg'

export default function BegginerGuide(){
    return (
        <div style={{ display: 'flex'}}>
            <div style={{backgroundColor:'#293140', marginBottom: '15px', marginTop: '15px',height: '90px', width: '20%'}}>
                <div style={{display: 'flex',flexFlow: 'row wrap',justifyContent: 'center' }}>
                    <img src={GuidSvg} width={50} height={50} />
                    {/* style={{marginRight: '30px'}} */}
                        
                    <span style={{ marginLeft: '10px',marginTop: '10px', color:'orange', fontSize: '17px'}}>
                        HOT | Beginner's Guide
                    </span>
                
                </div>    
                    <span style={{ marginLeft: '70px',marginTop: '10px', color:'grey', fontSize: '11px'}}>
                        Yukabex Official Customer Service
                    </span>
            </div>
            <div className={`GuideHolder`} style={{ backgroundColor:'#293140' ,marginTop: '15px' ,display: 'flex',flexFlow: 'row wrap',width: '78%',height: '90px'}} >
                   <div style={{display: 'flex',backgroundColor : 'orange' ,  borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px', width: '23%', margin:'10px'}}>
                        <img src={DollarSign} width={30} height={30}  style={{marginTop: '22px', marginRight: '16px'}}/>
                        <div style={{display: 'flex', flexFlow: 'row wrap' , justifyContent: 'left', alignContent: 'center' , color: 'white',fontSize: '16px'}}>
                            <span>Curerency Transaction</span>
                            <span>Use One Digital Asset To</span>
                        </div>
                   </div>
                   <div style={{display: 'flex',backgroundColor : '#1D2330' , borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px', width: '23%', margin:'10px'}}>
                         <img src={minichart} width={30} height={30}  style={{marginTop: '22px', marginRight: '16px',backgroundColor : '#1D2330'}} />
                        <div style={{display: 'flex', flexFlow: 'row wrap' , justifyContent: 'left', alignContent: 'center' , color: 'white',fontSize: '15px'}}>
                            <span>Option Contract</span>
                            <span>Is A Digital Asset Derivat</span>
                        </div>
                   </div>
                   <div style={{display: 'flex',backgroundColor : '#1D2330' , borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px', width: '23%', margin:'10px'}}>
                        <img src={CubeSvg} width={30} height={30} style={{marginTop: '22px', marginRight: '16px'}}/>
                        <div style={{display: 'flex', flexFlow: 'row wrap' , justifyContent: 'left', alignContent: 'center' , color: 'white', fontSize: '13px'}}>
                            <span>Contract Transaction</span>
                            <span>T + 0 Two-Way Trading Virt</span>
                        </div>
                   </div>
                   <div style={{display: 'flex',backgroundColor : '#1D2330' , borderTopLeftRadius: '10px',borderBottomLeftRadius: '10px', width: '23%', margin:'10px'}}>
                        <img src={Sheild} width={30} height={30} style={{marginTop: '22px', marginRight: '16px'}}/>
                        <div style={{display: 'flex', flexFlow: 'row wrap' , justifyContent: 'left', alignContent: 'center' , color: 'white',fontSize: '16px'}}>
                            <span>Quick Exchange</span>
                            <span>Quickly Exhchange Digital</span>
                        </div>
                   </div>
            </div>
         </div>
    )
}