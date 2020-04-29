import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import { makeStyles } from '@material-ui/core/styles';

export default function BottomNav({value, setValue}) {
  
  const useStyles = makeStyles(theme => ({
    color:{
      backgroundColor: '#0ca678',
      color: 'white'
    },
    none:{}
  }));

  const classes = useStyles();

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.color}
    >
      <BottomNavigationAction className={classes.color} label="Favorites" icon={<FavoriteTwoToneIcon />} />
      <BottomNavigationAction className={classes.color} label="Settings" icon={<SettingsTwoToneIcon />} />
    </BottomNavigation>
  );
}
