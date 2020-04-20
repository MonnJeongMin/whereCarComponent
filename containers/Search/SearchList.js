import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { LogoWrapper } from 'components/List/Car';
import { ListWrapper, BottomNav } from 'components/List';
import styled from 'styled-components';
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '21rem',
    // maxWidth: 400,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '21rem',
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  Button: {
    margin: theme.spacing(0.5),
  }
}));

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 1rem 0 1rem 0;
    height: auto;
`;

const Groups = {
 Group : [
   {
   name: "학원1",
   id : 1
 },
{
  name: "학원2",
  id : 2
},
{
  name: "학원3",
  id : 3
},
{
  name: "학원4",
  id : 4
},
{
 name: "학원5",
 id : 5
},
{
 name: "학원6",
 id : 6
},
{
  name: "학원7",
  id : 7
},
{
 name: "학원8",
 id : 8
},
{
 name: "학원9",
 id : 9
}
]
}

export default function SearchList() {
  const classes = useStyles();
  const GD = Groups.Group;


  return (
    <ListWrapper>
      <LogoWrapper title="Search List" >
      </LogoWrapper>
      <Contents>
      <List dense className={classes.root}>
      {GD.map(value => {
        const labelId = `transfer-list-all-item-${value}-label`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${value.name}`} />
            <ListItemSecondaryAction>
              <Button className={classes.Button} variant="outlined">상세보기</Button>
              <Button className={classes.Button} variant="outlined">즐겨찾기 추가</Button>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
        </List>
      </Contents>
    </ListWrapper>
  );
}