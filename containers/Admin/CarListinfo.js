import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { RightAlignedLink } from 'components/Auth';
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import {AdminWrapper} from 'components/Admin';

//스타일 시트
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
  },
  cardHeader: {
    padding: theme.spacing(1, 2)
  },
  list: {
    height: 350,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto"
  },
  addcar: {
    backgroundColor: theme.palette.background.paper,
    overflow: "auto" 
  },
  card: {
      padding: 10
  },
  icon: {
    marginRight: '1rem'
  }
}));

//더미 데이터
const initialState = {
  groupInfo: {
      users: [
          "5e8424fddd727b8885616051",
          "5e842525dd727b8885616052"
      ],
      drivers: [],
      _id: "5e842681dd727b8885616053",
      type: "Academy",
      name: "asdasdasd",
      tell: "01040247797",
      location: "incheonaaa",
      description: "aaaaaaaaa",
      certification: "asdddddddd",
      createdAt: "2020-04-01T05:28:33.999Z",
      __v: 0
  },
  carList: [
      {
        _id: "5e90a8952463b3ddb835f181",
        carName: "마티즈",
        carNumber: "13가1212",
        seatNumber: "3",
        inspectionDate: "2020-01-01T00:00:00.000Z",
        carImageUrl: "uploads\\car\\banner1586538645039.jpg",
        group: "5e842681dd727b8885616053",
        createdAt: "2020-04-10T17:10:45.075Z",
        __v: 0
      },
      {
        _id: "5e90a8952463b3ddb835f181",
        carName: "벤츠",
        carNumber: "13가1212",
        seatNumber: "3",
        inspectionDate: "2020-01-01T00:00:00.000Z",
        carImageUrl: "uploads\\car\\banner1586538645039.jpg",
        group: "5e842681dd727b8885616053",
        createdAt: "2020-04-10T17:10:45.075Z",
        __v: 0
      },
      {
        _id: "5e90a8952463b3ddb835f181",
        carName: "아우디",
        carNumber: "13가1212",
        seatNumber: "3",
        inspectionDate: "2020-01-01T00:00:00.000Z",
        carImageUrl: "uploads\\car\\banner1586538645039.jpg",
        group: "5e842681dd727b8885616053",
        createdAt: "2020-04-10T17:10:45.075Z",
        __v: 0
      }
  ]
}

export default function CarListModify() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const CI = initialState.carList;


  const customList = (title, items ) => (
    <Card>
      <AdminWrapper>
      <CardHeader
        className={classes.cardHeader}
        title={title}
      />
      <Divider />
      <List className={classes.list}>
        {
        items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
            >
              <ListItemText id={labelId} primary={`${value.carName}`} />
              <ListItemText id={labelId} primary={`${value.carNumber}`} />
              <ListItemText id={labelId} primary={`${value.seatNumber}`} />
              <ListItemText id={labelId} primary={`${value.inspectionDate}`} />
            </ListItem>
          );
        })}
        <ListItem />
        <RightAlignedLink to="/admin/cars">이전</RightAlignedLink>
      </List>
          </AdminWrapper>
    </Card>
    
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={10} sm={6}>
        {customList("차량 상세 정보", CI)}
      </Grid>
    </Grid>
  );
}
