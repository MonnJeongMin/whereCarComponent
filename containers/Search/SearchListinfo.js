import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { LogoWrapper } from 'components/List/Car';
import { ListWrapper } from 'components/List';
import styled from 'styled-components';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
  },

}));

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 1rem 0 1rem 0;
    height: auto;
`;

const Groups = {
    group : [
        {
            name : "HERE카 학원",
            info : "블라블라블라한 학원이다."
        }
    ]

}

export default function SearchList({history, courseList, ListActions}) {
  const classes = useStyles();
  const gd = Groups.group

  return (
    <ListWrapper>
      <LogoWrapper title="Group info" >
      </LogoWrapper>
      <Contents>
      <List dense className={classes.root}>
      {gd.map(value => {
        const labelId = `transfer-list-all-item-${value}-label`;
        return (
          <div>
          <ListItem key={value} role="listitem">
            <StarBorderIcon/>
            <ListItemText id={labelId} primary={`학원이름 : ${value.name}`} />
          </ListItem>
          <ListItem key={value} role="listitem">
            <StarBorderIcon/>  
            <ListItemText id={labelId} primary={`설명 : ${value.info}`} />
          </ListItem>
          </div>  

        );
        // courseList.map(course => (
        //     <ListItem key="1" role={undefined} dense button onClick={function(){}}>
        //       <DriveEtaIcon className={classes.icon}/>
        //       <ListItemText id={1} primary={<ExtendListItem title={course.courseName} subContent={course.stations}/> }/>
        //     </ListItem>
      })}
        </List>
      </Contents>
    </ListWrapper>
  );
}