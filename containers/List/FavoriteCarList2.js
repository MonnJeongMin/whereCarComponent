import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LogoWrapper } from 'components/List/Car';
import { ListWrapper, BottomNav } from 'components/List';
import styled from 'styled-components';
import socketIOClient from "socket.io-client";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as socketActions from 'redux/modules/socket';
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { FavoriteExtendListItem } from 'components/Base/List';
import EmojiTransportationTwoToneIcon from '@material-ui/icons/EmojiTransportationTwoTone';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import IconButton from '@material-ui/core/IconButton';
import StarIcon from '@material-ui/icons/Star';
import { yellow } from '@material-ui/core/colors';

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
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  button: {
    backgroundColor: "#ffac32",
    borderColor: "#ffac32",
    marginLeft: 100,
    "&:hover": {
      backgroundColor: "#ffac32",
      borderColor: "#ffac32"
    },
    "&:active": {
      backgroundColor: "#ffac32",
      borderColor: "#ffac32"
    }
  },
  padding:{
    paddingRight : 10
  },
  contentbox:{
    height: '21rem',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
  },
  inCar:{
    backgroundColor: '#0ca678',
    color: 'white'
  },
  none:{}
}));

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 1rem 0 1rem 0;
    height: auto;
`;

// dummy Data [지워야 함]
const driver1 = {

};
const driver2 = {

};

// test 용 더미 데이터 =
const Mylist = {
  Group : [
    {
      name : "학원1",
      id : 1,
      course : {
        coursename : ["돌아가코스"],
        station : [
          {
            "stationName": "여긴",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "어디인가",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "누구인가",
            "longitude": 311.2,
            "latitude": 311.5
        }
        ]
      }
      
    },
    {
      name : "학원2",
      id : 2,
      course : {
        coursename : ["중급코스"],
        station : [
          {
            "stationName": "여긴",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "어디인가",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "누구인가",
            "longitude": 311.2,
            "latitude": 311.5
        }
        ]
      }
      
    },
    {
      name : "학원3",
      id : 3,
      course : {
        coursename : ["풀코스"],
        station : [
          {
            "stationName": "여긴",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "어디인가",
            "longitude": 311.2,
            "latitude": 311.5
        },
        {
            "stationName": "누구인가",
            "longitude": 311.2,
            "latitude": 311.5
        }
        ]
      }
      
    }
]}

// 메인 함수

function FavoriteCarList2({children, driverList, SocketActions}) {
  const classes = useStyles();
  const [bottomValue, setBottomValue] = React.useState(0);
  // socket 작업
  const endpoint = 'http://localhost:4000';
  const socket = socketIOClient(endpoint);

  
  // 아이 탑승 여부에 따라서 학원 색상이 변경!
  // 여기다가 아이가 탑승했다는 값을 받아와서 비교하고 아이가 탑승하고 있다면 색상 변경하는 id를 반환
  const childin =true;

  // 색상 변경하는 id를 반환하는 함수
  function checkchild(){
    return classes.inCar
    }
  // 색상 변경하지 않는 id를 반환하는 함수
  function none(){
    return classes.none
  }
 
  // Expend 부분 
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // test용입니다. [Server에서 사용되는 소스]
  socket.emit("driverActive", {driver: driver1, active: true}); // test용 driver 활성화 [test]
  socket.emit("driverActive", {driver: driver2, active: true}); // test용 driver 활성화 [test]

  return (
    <ListWrapper>
      <LogoWrapper title="My Page" titleUrl="/">
      </LogoWrapper>
      <Contents className={classes.contentbox}>
        {
          Mylist.Group.map(value => (
            <ExpansionPanel
            expanded={expanded === value.name}
            onChange={handleChange(value.name)}
            key = "1"
            className = {childin === true ? checkchild() : none()} 
            >
            {/*child 값에 따라서 색상 변경*/}
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <StarIcon style={{ color: yellow[500] }} className={classes.padding}/>
              <Typography className={classes.heading}>{value.name} 현재:{value.course.station.stationName}</Typography>
              {/* 위의 현재: 이후의 {}안에 현재 위치 값 받아오기를 넣어야 한다!*/}
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FavoriteExtendListItem title={value.course.coursename} subContent={value.course.station}/>
              <IconButton edge="end" aria-label="comments">
                <DeleteTwoToneIcon />
              </IconButton>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          ))
        }
      </Contents>
      <BottomNav value={bottomValue} setValue={setBottomValue}/>
    </ListWrapper>
  );
}

export default connect(
  (state) => ({
    driverList: state.socket.getIn(['myList', 'driverList']).toJS(),
  }),
  (dispatch) => ({
    SocketActions: bindActionCreators(socketActions, dispatch)
  })
)(FavoriteCarList2);

