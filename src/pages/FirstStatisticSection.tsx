import React from 'react'

import '../styles/FirstStaticSection.scss'
import BitCoin from '../components/Svg/BitCoin.svg'
import CryptoDollar from '../components/Svg/CryptoDollar.svg';
import ChartBubble from '../components/Svg/ChartBubble.svg'
import Btc from '../components/Svg/Btc.svg';
import SimpleIcon from '../components/Svg/SimpleIcon.svg';
import LineChart from '../components/Svg/LineChart.svg';

export default function FirstStatisticSection(){
    return(
        <>
                <section className={`FirstStaticSection`}>
                    <div className={`CardOne`}>
                        <div className={`FlexContainer`}>
                            <img src={BitCoin} width={40} height={40} style={{marginTop: '10px' ,textAlign : 'center' , display: 'flex' , justifyContent: 'center'}}/>
                         
                            <div className={`InnerColumn`}>
                                <span className={`BitCoin`}>Bitcoin (BTC)</span>
                                <span className={`Money`}>$494444.40</span>
                            </div>
                        </div>
                          <img src={LineChart} width={`100%`} height={100} className={`minichart`}  />
                           <div className={`DetailHolder`}>
                                <span style={{color:'white'}}>Highest Price:</span>
                                <span style={{color:'orange'}}>$53.698</span>
                           </div>
                           <div className={`DetailHolderSecond`}>
                                <span style={{color:'white'}}>Lowest Price</span>
                                <span style={{color:'orange'}}>$48.998</span>
                              </div>
                            <div className={`DetailHolderThird`}>
                                <span style={{color:'white'}}>24H Change:</span>
                                <span style={{color:'orange'}}>+1.3%</span>
                            </div>
                            <div className={`DetailHolderFourth`}>
                                <span style={{color:'white'}}>24H Volume:</span>
                                <span style={{color:'orange'}}>#3,561,964,963</span>
                           </div>
                    </div>
                    <div  className={`CardTwo`}>
                        <div className={`FlexContainer`}>
                            <img src={CryptoDollar} width={40} height={40} style={{marginLeft: '10px',marginTop: '10px',textAlign : 'center' , display: 'flex' , justifyContent: 'center'}} />
                            
                            <div className={`InnerColumn`}>
                                <span className={`BitCoin`}>Bitcoin (BTC)</span>
                                <span className={`Money`}>$494444.40</span>
                            </div>
                        </div>
                          <img src={LineChart} width={`100%`} height={100} className={`minichart`}  />
                          <div className={`DetailHolder`}>
                                <span style={{color:'white'}}>Highest Price:</span>
                                <span style={{color:'orange'}}>$53.698</span>
                           </div>
                           <div className={`DetailHolderSecond`}>
                                <span style={{color:'white'}}>Lowest Price</span>
                                <span style={{color:'orange'}}>$48.998</span>
                              </div>
                            <div className={`DetailHolderThird`}>
                                <span style={{color:'white'}}>24H Change:</span>
                                <span style={{color:'orange'}}>+1.3%</span>
                            </div>
                            <div className={`DetailHolderFourth`}>
                                <span style={{color:'white'}}>24H Volume:</span>
                                <span style={{color:'orange'}}>#3,561,964,963</span>
                           </div>
                    </div>
                    <div  className={`CardThree`}>
                        <div className={`FlexContainer`}>
                            <img src={SimpleIcon} width={40} height={40} style={{marginLeft: '10px',marginTop: '10px',textAlign : 'center' , display: 'flex' , justifyContent: 'center'}} /> 
                            
                            <div className={`InnerColumn`}>
                                <span className={`BitCoin`}>Bitcoin (BTC)</span>
                                <span className={`Money`}>$494444.40</span>
                            </div>
                        </div>
                          <img src={LineChart} width={`100%`} height={100} className={`minichart`}  />
                           <div className={`DetailHolder`}>
                                <span style={{color:'white'}}>Highest Price:</span>
                                <span style={{color:'orange'}}>$53.698</span>
                           </div>
                           <div className={`DetailHolderSecond`}>
                                <span style={{color:'white'}}>Lowest Price</span>
                                <span style={{color:'orange'}}>$48.998</span>
                              </div>
                            <div className={`DetailHolderThird`}>
                                <span style={{color:'white'}}>24H Change:</span>
                                <span style={{color:'orange'}}>+1.3%</span>
                            </div>
                            <div className={`DetailHolderFourth`}>
                                <span style={{color:'white'}}>24H Volume:</span>
                                <span style={{color:'orange'}}>#3,561,964,963</span>
                           </div>
                    </div>
                    <div  className={`CardFour`}>
                        <div className={`FlexContainer`}>
                            <img src={Btc}  width={40} height={40} style={{marginLeft: '10px',marginTop: '10px',textAlign : 'center' , display: 'flex' , justifyContent: 'center'}} />
                            
                            <div className={`InnerColumn`}>
                                <span className={`BitCoin`}>Bitcoin (BTC)</span>
                                <span className={`Money`}>$494444.40</span>
                            </div>
                        </div>
                          <img src={LineChart} width={`100%`} height={100} className={`minichart`}  />
                           <div className={`DetailHolder`}>
                                <span style={{color:'white'}}>Highest Price:</span>
                                <span style={{color:'orange'}}>$53.698</span>
                           </div>
                           <div className={`DetailHolderSecond`}>
                                <span style={{color:'white'}}>Lowest Price</span>
                                <span style={{color:'orange'}}>$48.998</span>
                              </div>
                            <div className={`DetailHolderThird`}>
                                <span style={{color:'white'}}>24H Change:</span>
                                <span style={{color:'orange'}}>+1.3%</span>
                            </div>
                            <div className={`DetailHolderFourth`}>
                                <span style={{color:'white'}}>24H Volume:</span>
                                <span style={{color:'orange'}}>#3,561,964,963</span>
                           </div>
                    </div>
                </section>
        </>
    )
}