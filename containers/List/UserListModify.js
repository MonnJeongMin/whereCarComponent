import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Card from "@material-ui/core/Card";
import { ListWrapper, BottomNav } from 'components/List';
import CardHeader from "@material-ui/core/CardHeader";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { LogoWrapper } from 'components/List/Car';

//스타일 시트
const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto"
  },
  cardHeader: {
    padding: theme.spacing(1, 2)
  },
  list: {
    width: 200,
    height: 230,
    overflow: "auto"
  },
  button: {
    marginLeft: 100,
    marginBottom: 5
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
  Users: ["김복근", "요를레이", "시발", "안해"]
};

export default function UserListModify() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const [userlists, setuserlists] = React.useState({
    data: dummyRole["Users"]
  });
  const UD = userlists.data;

  //현재 리스트와 체크된 것의 교집합
  const Listchecked = intersection(UD, checked);
  // 리스트에서 해당 데이터를 삭제하기
  const deleteUser = () => {
    setuserlists({
      ...userlists,
      data: not(UD, checked)
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
    <ListWrapper>
      <LogoWrapper title="User List" titleUrl="/">
      </LogoWrapper>
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
              <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
      <Grid className={classes.button}>
        <Button
          variant="outlined"
          size="large"
          className={classes.button}
          onClick={deleteUser}
          aria-label="Data"
          startIcon={<DeleteIcon />}
        >
          삭제
        </Button>
      </Grid>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>

    </ListWrapper>
  );

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid>
        {customList("유저 목록", UD)}
      </Grid>
    </Grid>
  );
}
