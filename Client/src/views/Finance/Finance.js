import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
//import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Warning from "@material-ui/icons/Warning";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton'
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

//import Success from "components/Typography/Success.js"
import Danger from "components/Typography/Danger.js";
//import Rose from "components/Typography/Rose"
//import Success from "components/Typography/Success"
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";


//ICONS:
import BitcoinIcon from "assets/img/bitcoin-logo.png";
import EthereumIcon from "assets/img/ethereum_logo.png";
import TetherIcon from "assets/img/tether-logo.png";

import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

//Variables:
import BitcoinPrice from "variables/Finance/BitcoinPrice";
import ETHPrice from "variables/Finance/ETHPrice";
import TetherPrice from "variables/Finance/TetherPrice";

//Charts
import BitcoinChart from "variables/Finance/BitcoinChart";
import EthChart from "variables/Finance/EthChart"
import TetherChart from "variables/Finance/TetherChart"

//Styles:
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";




//import {
  //dailySalesChart,
  //emailsSubscriptionChart,
//  completedTasksChart
//} from "variables/charts.js";

const useStyles = makeStyles(styles);


export default function Finance() {
  const classes = useStyles();
  return (
    <div>
      <h3>
      Crypto
      <IconButton href="./finance"> 
        <RefreshIcon/>
      </IconButton>
      </h3> 
        <div className={classes.stats}>
          <Danger>
            <Warning />
          </Danger>
            <a href='https://www.coingecko.com/en/api' target='_blank' rel="noopener noreferrer">
              All prices are using an exeternal API and may not be up to date
            </a>
        </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="warning">
              <img className="icon" src={ BitcoinIcon } alt="logo"/>
              </CardIcon>
              <h1 className={classes.cardCategory}>Bitcoin Price</h1>
              <h3 className={classes.cardTitle}>
              £ <BitcoinPrice />
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a  href="https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=gbp" target="_blank" rel="noopener noreferrer" onClick={e => e.preventDefault()}>
                  This price is using an exeternal API and may not be up to date
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
              <img className="icon" src={ EthereumIcon } alt="logo"/>
              </CardIcon>
              <p className={classes.cardCategory}>Ethereum Price</p>
              <h3 className={classes.cardTitle}>
              £ <ETHPrice /> 
              
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <img className="icon" src={ TetherIcon } alt="logo"/>
              </CardIcon>
              <p className={classes.cardCategory}>Tether Price</p>
              <h3 className={classes.cardTitle}>
              £ <TetherPrice /> 
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Danger>
                  <Warning />
                </Danger>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Get more space
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
            <BitcoinChart
                className="ct-chart"
                type="Line"
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Bitcoin Price Chart</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                Last Week's Bitcoin Performance
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardHeader color="info">
            <EthChart
                className="ct-chart"
                type="Line"
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Ethereum Price Chart</h4>
              <p className={classes.cardCategory}>Last Week's Ethereum Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
          <CardHeader color="success">
            <TetherChart
                className="ct-chart"
                type="Line"
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Tether Price Chart</h4>
              <p className={classes.cardCategory}>Last Week's Tether Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      </div>

  );
}
