import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardAction from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import FingerPrint from '../components/Svg/FingerPrint.svg';
import Watch from '../components/Svg/Watch.svg';
import Globe from '../components/Svg/Globe.svg';

import ChartBubble from '../components/Svg/ChartBubble.svg';


const useStyles = makeStyles({
    root:{
        minWidth: 275,
        backgroundColor: '#293140',
        textAlign: 'center',
        display: 'felx',
        flexFlow: 'row wrap',
        margin: '10px',
        border: 'none',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    flexy : {
        display: 'flex',
        flexFlow: 'row',
        justifyContent: 'center',
        marginLeft: '15px',
        marginBottom: '15px',
        marginRight: '15px',
        backgroundColor: '#293140',
        width: '98%'
    },
    cardContentFlex : {
        display: 'flex',
        flexFlow: 'column wrap',
        justifyContent: 'center'
    }

})

export  function SimpleCard(props : any) : JSX.Element {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>.</span>
    return(
        <Card className={classes.root}>
                <CardContent className={classes.cardContentFlex}>
                    <div style={{ borderRadius: '50px',display: 'flex',flexFlow: 'row wrap',width: '100px',height: '100px',background: 'orange',justifyContent: 'center',alignContent: 'center',alignSelf: 'center'}}>
                         <img src={props.props}/>
                    </div>
                    <Typography variant="h6" component="h2" style={{color:'white' ,padding : '10px'}}>
                                {props.typegrapyContent}
                    </Typography>
                    <Typography className={classes.title} color="textSecondary" style={{color: 'grey' , fontSize: '17px'}} gutterBottom>
                                {props.paragraph}
                    </Typography>
                </CardContent>
        </Card>
    )
}


export default function AboveTheFooter(){
    const classes = useStyles();
    const Pagraph = {
        One : 'All-round financial wind control system and anti-theft system,hot and cold wallet, multi-signature system to ensure the safety of funds',
        Two : '24H manual online audit can protect customers from missing out on the nest investment opportunities.',
        Three : 'Global Business Service Network Coverage Helps You Invest in Global Encryoted Assets and Transact with Global Users',
        Four : 'We Strictly select thse high-quality blockchain projects to filter 80% extremely high-risk projects for you'
    }
    return (
        <section className={classes.flexy}>
                <SimpleCard props={FingerPrint} typegrapyContent={'SECURITY'} paragraph={Pagraph.One}/>

                <SimpleCard props={Watch}  typegrapyContent={'24H SERVICE'} paragraph={Pagraph.Two}/>
                
                <SimpleCard props={Globe}  typegrapyContent={'GLOBAL EXCHANGE'} paragraph={Pagraph.Three}/>
                
                <SimpleCard props={ChartBubble}  typegrapyContent={'STRICTLY PROJECT'} paragraph={Pagraph.Four}/>
        </section>
    )
}