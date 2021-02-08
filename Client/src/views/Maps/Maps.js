/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import styles from "assets/jss/material-dashboard-react/views/iconsStyle.js";

const useStyles = makeStyles(styles);

export default function Icons() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>Material Design Icons</h4>
            <p className={classes.cardCategoryWhite}>
              
            </p>
          </CardHeader>
          <CardBody>
            <Hidden only={["sm", "xs"]}>
            <iframe height="800" width="1600" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed?center=52.41268147662969,-1.4920806884765623&zoom=10&maptype=map"></iframe>
            </Hidden>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
