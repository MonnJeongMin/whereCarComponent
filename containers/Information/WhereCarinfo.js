import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: "20rem",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 26,
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
  },
  bigtext: {
    textAlign:'center',
    fontSize:50,
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
  },
});

export default function WhereCarinfo() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>
          WhereCar에 오신 것을 환영합니다!
        </Typography>
        <br />
        <Typography className={classes.text} variant="pre" component="h3">
          안녕하세요 WhereCar 입니다!<br />
          저희 사이트는 아이들의 안전을 어느 정도 보장하고자 만들어진 사이트 입니다.<br />
          부모님이나 가족분들이 학원이나 유치원, 학교 등의 다양한 기관으로 차량을 타고
          이동하는 과정에서 아이들이 제대로 기관에 도착을 하였는지 확인이 가능하도록 지원을 하고 있습니다.
          <br />
          또한 기관에서 부모님들께 알림이나 공지를 보내드리는 기능도 있어서 학무모 및 기관담당자분들이
          유용하게 활용을 할 수 있는 사이트가 될 것이라 확신합니다.
          <br /><br /><br />
        </Typography>
        <Typography className={classes.bigtext}>
        <br /><br /><br />
          제작 : 팀 갓성비
        </Typography>
      </CardContent>
    </Card>
  );
}