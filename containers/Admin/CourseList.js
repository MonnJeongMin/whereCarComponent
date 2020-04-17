import React from "react";
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
import {AdminWrapper} from 'components/Admin';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

//스타일 시트
const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto"
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
  }
}));

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

//더미 데이터
const dummyRole = {
  Users: ["경로1", "경로2", "경로3", "경로4"]
};

export default function CousrseListModify({history}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [Carlists, setCarlists] = React.useState({
    data: dummyRole["Users"]
  });
  const CD = Carlists.data;

  //현재 리스트와 체크된 것의 교집합
  const Listchecked = intersection(CD, checked);
  // 리스트에서 해당 데이터를 삭제하기
  const deleteCar = () => {
    setCarlists({
      ...Carlists,
      data: not(CD, checked)
    });
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
      <List className={classes.list} dense component="div" role="list">
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
              <GolfCourseIcon className={classes.icon}/>
              <ListItemText id={labelId} primary={`${value}`} />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="info">
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
              onClick={ () =>  {history.push('/admin/courses/register')} }
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
        {customList("경로 목록", CD)}
      </Grid>
    </Grid>
  );
}
