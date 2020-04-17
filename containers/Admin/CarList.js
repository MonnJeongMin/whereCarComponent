import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import InfoIcon from '@material-ui/icons/Info';
import {AdminWrapper} from 'components/Admin';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

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


//집합 함수들
function not(a, b) {
  return a.filter(value => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter(value => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function CarListModify({history}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [carList, setCarList] = useState(initialState.carList)
  const CD = initialState.carList;

  //현재 리스트와 체크된 것의 교집합
  const Listchecked = intersection(CD, checked);
  // 리스트에서 해당 데이터를 삭제하기
  const deleteCar = () => {
    not(CD, checked);
    setChecked(not(Listchecked, checked));
  };


  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = items => intersection(checked, items).length;

  const handleToggleAll = items => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };


  const customList = (title, items) => (
    <Card>
      <AdminWrapper>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{ "aria-label": "all items selected" }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List className={classes.list}>
        {items.map(value => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <DriveEtaIcon className={classes.icon}/>
              <ListItemText id={labelId} primary={`${value.carName}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="comments">
                  <CommentIcon />
                </IconButton>
                <IconButton edge="end" aria-label="info" onClick={ () => {history.push('/admin/cars/info')}}>
                  <InfoIcon />
                </IconButton>
              </ListItemSecondaryAction>

            </ListItem>
          );
        })}
        <ListItem />
      </List>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
          >
            <BottomNavigationAction
              label="Delete"
              onClick={deleteCar}
              icon={<DeleteIcon />}
            />
            <BottomNavigationAction
              label="Add"
              icon={<AddCircleIcon />}
              onClick={ () => {history.push('/admin/cars/register')}}
            />
          </BottomNavigation>
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
        {customList("차량 목록", CD)}
      </Grid>
    </Grid>
  );
}
