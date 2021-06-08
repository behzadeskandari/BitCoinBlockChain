import React from 'react'


import {makeStyles} from '@material-ui/core/styles';
import Mobile from '../components/Svg/Mobile.svg';
import MiniMobile from '../components/Svg/MiniMobile.svg';
import BarCode from '../components/Svg/BarCode.svg';
import SmallApple from '../components/Svg/SmallApple.svg';
import { Android, Apple } from '@material-ui/icons';
import SlimMobile from '../components/Svg/SlimMobile.svg';

const useStyles = makeStyles({  
    root:{
        display: 'flex',
        flexFlow: 'row wrap',
        width: '100%',
        height: '15em',
        background: '#111622',
    },
    MobileSection:{

    },
    MobileApplication:{
        display: 'flex',
        flexFlow: 'column wrap',
        textAlign : 'center',
        padding: '10px',
        marginTop: '15px'
    },
    MobileBarcode:{
        marginTop: '30px',
        display: 'block',
        position: 'relative',
        right: '10px',
        width: '25%',
        marginBottom: '30px'
    },
    MobileMini : {
        position: 'relative',
        right: '60px',
    },
    right:{
        float : 'right'
    },
    BtnISOS: {
        margin: '10px',
        backgroundColor: 'orange',
        border: 'none',
        padding: '12px',
        borderRadius: '15px',
        color: 'white',
        fontSize: '18px'
    },
    BtnAndroid:{
        color: 'white',
        backgroundColor: 'orange',
        border: 'none',
        padding: '12px',
        borderRadius: '15px',
        fontSize: '18px',
        paddingLeft : '10px',
        paddingRight: '10px',
        paddingBottom : '10px'
    },
    spanMobile: {
        color: 'white',
        // marginTop : '24px',
        marginBottom: '12px',
        fontSize: '25px',
        textAlign: 'left'
    },
    Dwn: {
        color : 'grey',
        padding: '10px',
        textAlign: 'left'
    },
    divider : {
        paddingTop: '2em'
    }
})

export default function MobileSection(){
    const classes = useStyles();
    return (
        <>
            <section className={classes.root}>
                    <div className={classes.MobileSection}>
                                 <img  src={Mobile} />
                                 <img  src={MiniMobile} className={classes.MobileMini}/>
                    </div>

                    <div className={classes.MobileApplication}>
                                <img src={SlimMobile} width={15} height={15}/>
                                <span className={classes.spanMobile}>Mobile Application</span>
                                <span className={classes.Dwn}>Download Our Application</span>
                                
                                <div className={classes.divider}>
                                    <button  className={classes.BtnISOS}> <Android /> Download For IOS </button>
                                    <button  className={classes.BtnAndroid}><Apple />  Download For Android </button>
                                </div>
                    </div>

                    <div className={classes.MobileBarcode}>
                                <img src={BarCode} width={100} height={100} className={classes.right}/>
                    </div>
            </section>
        </>
    )
}