import React from "react";
import MaterialTable from "material-table";
import { Data } from "components/Table/TableData"
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
//import { BorderAllRounded, BorderTop, SortOutlined } from "@material-ui/icons";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function BigTable() {
  const classes = useStyles();
  const { useState } = React;
  const [selectedRow, setSelectedRow] = useState(null);
return (
  <GridContainer>
    <GridItem xs={12} sm={12} md={12}>
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Table Title</h4>
          <p className={classes.cardCategoryWhite}>
            This is an example table to show the presentation of information
          </p>
        </CardHeader>
        <CardBody>
        <MaterialTable
          onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
          options={{ //toolbar: false
          showTitle: false,

          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#DDD' : '#FFF' //left colour is after it is selected, right is the default colour
          }),

          exportButton: true,
          columnResizable: true,
          draggable: false,
          }}


          columns={[
            { title: 'Name', field: 'name', 
            cellStyle: {
              border: "1px solid black",
              borderRight: "2px solid bkack", 
            },
            },
            { title: 'Surename', field: 'surname',
             cellStyle: {
              border: "1px solid black",
              borderRight: "2px solid bkack", 
            },
          },
            { title: 'Age', field: 'age', type: 'numeric',
            cellStyle: {
              border: "1px solid black",
              borderRight: "2px solid bkack", 
            },
           },
            { title: 'Email Address', field: 'email',
            cellStyle: {
              border: "1px solid black",
              borderRight: "2px solid bkack", 
            },
          },
            { title: 'Phone Numebr', field: 'phone', type: 'numeric',
            cellStyle: {
              border: "1px solid black",
              borderRight: "2px solid bkack", 
            },
          }
          ]}
          data={Data}
          title="Demo Title"
        />
        </CardBody>
      </Card>
    </GridItem>
  </GridContainer>
);
}