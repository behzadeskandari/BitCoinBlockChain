import { Grid } from '@material-ui/core';
import * as React from 'react';
import logoFooter from '../../assets/images/logoFooter.png';
import '../../styles/SiteFooter.scss';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import FacebookIcon from '@material-ui/icons/Facebook';

function SiteFooter() {
    return(
        <div style={{ backgroundColor : 'rgba(41,49,64)'}}>
        <footer>
            <Grid container >
                <Grid item className={`DisplayFlexBox`}>
                    <img src={`${logoFooter}`}/>
                    <div className={`Best`}>
                        The Best Cryptocurrency Exchange
                    </div>
                    <div className={`Copyright`}>
                        Copyright 2021 All Right Reserved.
                    </div>
                     <div className={`IconHolder`}>
                        <WhatsAppIcon style={{marginLeft: '35px'}}/>
                        <InstagramIcon style={{marginLeft: '35px'}}/>
                        <TwitterIcon style={{marginLeft: '35px'}}/>
                        <TelegramIcon style={{marginLeft: '35px'}}/>
                        <FacebookIcon style={{marginLeft: '35px'}}/>
                    </div>
                </Grid>
                <Grid item className={`DisplayFlexBox`}>
                    <div className={`InnerFlex`}>
                        <span className={`FooterSpanStyle`} ></span>
                        <span className={`FooterHaderSpan`} >PROFILE</span>
                    </div>
                    <div className={`LinkList`}>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Join Us
                            </li>
                            <li>
                                Announcment
                            </li>

                            <li>
                                Api Doc
                            </li>
                        </ul>
                    </div>
                   
                </Grid>
                  <Grid item className={`DisplayFlexBox`}>
                    <div className={`InnerFlex`}>
                        <span className={`FooterSpanStyle`} ></span>
                        <span className={`FooterHaderSpan`} >HELP</span>
                    </div>
                    <div className={`LinkList`}>
                        <ul>
                            <li>
                                Beginner's Guide
                            </li>
                            <li>
                                FAQ
                            </li>
                            <li>
                                Exchange Guide
                            </li>

                            <li>
                                Coin's Info
                            </li>
                        </ul>
                    </div>
                   
                </Grid>
                 <Grid item className={`DisplayFlexBox`}>
                    <div className={`InnerFlex`}>
                        <span className={`FooterSpanStyle`} ></span>
                        <span className={`FooterHaderSpan`} >CONDITIONS</span>
                    </div>
                    <div className={`LinkList`}>
                        <ul>
                            <li>
                                Disclaimer
                            </li>
                            <li>
                                Privacy Policy
                            </li>
                            <li>
                                Service Policy
                            </li>

                            <li>
                                Legal Policy
                            </li>
                        </ul>
                    </div>
                   
                </Grid>
                 <Grid item className={`DisplayFlexBox`}>
                    <div className={`InnerFlex`}>
                        <span className={`FooterSpanStyle`} ></span>
                        <span className={`FooterHaderSpan`} >CONTACT US</span>
                    </div>
                    <div className={`LinkList`}>
                        <ul>
                            <li>
                                Service Mailbox
                            </li>
                            <li>
                                Cooperation
                            </li>
                            <li>
                                Market Application
                            </li>

                            <li>
                                Report
                            </li>
                        </ul>
                    </div>
                   
                </Grid>
            </Grid>
         
        </footer>
        </div>
    )
}
export default  SiteFooter