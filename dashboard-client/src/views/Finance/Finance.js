import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
//import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import Warning from "@material-ui/icons/Warning";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
// /import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import BitcoinPrice from "variables/BitcoinPrice"
import ETHPrice from "variables/ETHPrice"
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);


export default function Finance() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="warning">
                <MonetizationOnIcon />
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
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="info">
                <MonetizationOnIcon />
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
      </GridContainer>
    </div>
  );
}
