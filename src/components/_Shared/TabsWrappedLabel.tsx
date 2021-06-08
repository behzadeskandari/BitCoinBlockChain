import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TextField } from '@material-ui/core';
import miniLineChart from '../Svg/miniLineChart.svg';
import star from '../Svg/Star.svg';

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#323C4F',
    width: '90%',
    margin: '0 auto',
    display : 'flex',
    flexFlow : 'row wrap',
    alignItems: 'space-between',
    columnRuleStyle : 'double',
    justifyContent : 'space-between',
    borderRadius: '7px'
    },
    USDT:{
          padding : theme.spacing(3)
    },
    BTC:{
          padding : '10px',
          color: 'white'
    },
    ETH: {
          padding : '10px',
          color: 'white'
    },
    DivHolder:{
      display: 'flex',
      flexFlow : 'row wrap',
      alignItems: 'center',
      color: 'orange',
      fontSize : '16px',
      fontWeight : 'bold'
    },
    inputHolder: {

    },
    __Active: {
          display: 'flex',
          flexFlow: 'row wrap',
          width: '90%',
          height: 'auto',
          background: '#293140',
          margin: '0 auto',
          borderRadius: '7px'
    },
    innerClassHeader: {
      display: 'flex',
      flexFlow : 'row wrap',
      justifyContent: "space-between",
      width: '98%',
      marginLeft: '12px',
      marginTop: '10px',
      color: 'grey',
      fontSize : '16px',
      height: '2em'
    },
    innerClassSecond : {
      display: 'flex',
      flexFlow : 'row wrap',
      justifyContent: "space-between",
      width: '98%',
      marginLeft: '12px',
      marginTop: '10px',
      color: 'grey',
      fontSize : '16px',
      height: 'auto',
      position: 'relative',
     // bottom: '37%',
      borderBottom: '2px dashed gray'
    },
    innerClassThird : {

    }
}));

export default function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
    <div className={classes.root}>
      
        <div className={classes.DivHolder}>
            <span className={classes.USDT}>USDT</span>
            <span className={classes.BTC}>BTC</span>
            <span className={classes.ETH}>ETH</span>
        </div>
        <div className={classes.inputHolder}>
             <TextField required  id="outlined-required"  defaultValue="Enter The Coin Symbol...  " variant="filled" />
        </div>
    </div>
    <div className={classes.__Active}>
             
             <div  className={classes.innerClassHeader}>
               <span>Coin</span>
               <span>Lastest</span>
               <span>Change</span>
               <span>Higher</span>
               <span>Lower</span>
               <span>Amount</span>
               <span>Price Trend</span>
               <span>Operate</span>
               <span>Fav</span>
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold'}}>$3.561.964.963</span>
                  <img src={miniLineChart}  />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star}  />
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold'}}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold'}}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold'}}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold' }}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
             </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold' }}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
              </div>
             <div  className={classes.innerClassSecond}>
                    <span style={{color:'white'}}>BTC/USDT</span>
                    <span style={{color:'white'}}>$49444.34</span>
                    <span style={{color:'white'}}>+1.3</span>
                    <span style={{color:'white'}}>$53698</span>
                    <span style={{color:'white'}}>$48988</span>
                    <span style={{color:'orange', fontWeight: 'bold' }}>$3.561.964.963</span>
                    <img src={miniLineChart} />
                    <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                    <img src={star} />
              </div>
             <div  className={classes.innerClassSecond}>
                  <span style={{color:'white'}}>BTC/USDT</span>
                  <span style={{color:'white'}}>$49444.34</span>
                  <span style={{color:'white'}}>+1.3</span>
                  <span style={{color:'white'}}>$53698</span>
                  <span style={{color:'white'}}>$48988</span>
                  <span style={{color:'orange', fontWeight: 'bold' }}>$3.561.964.963</span>
                  <img src={miniLineChart} />
                  <span style={{color: 'orange', fontWeight: 'bold'}}>Exchange</span>
                   <img src={star} />
              </div>
           
            
    </div>

    </>
  );
}