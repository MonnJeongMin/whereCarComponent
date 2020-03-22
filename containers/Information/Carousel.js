import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

//케러셀 이미지
const tutorialSteps = [
  {
    label: "사용자 메인 페이지",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfOSAg/MDAxNTg0NDU1MjM0MjA3.tsm1fUumZSOBTZoLiyyAmiMxUFv_WRDZxgpxld7mWl4g.N2fCJHoGJlIboCqTWLbL7TLrk81YiiB0K-H93pP65vgg.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg?type=w966",
    mean: "사용자 메인페이지로 즐겨 찾기 항목을 바로 탐색합니다."
  },
  {
    label: "사용자 메인 페이지",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfMjgy/MDAxNTg0NDU1MjM0NDQz.43Ox-8biBr3SzGnT9IqG0uOKDd5ZJZuv-AV7-0HKLOsg.eqOl2EmOo6zB5-yq1QO4TQ3tiSyresoArQs3wfNV6QIg.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%B0%A8%EB%9F%89_%ED%81%B4%EB%A6%AD%EC%8B%9C.jpg?type=w966",
    mean: "정보를 얻고자 하는 차량을 클릭하여 위치를 확인합니다."
  },
  {
    label: "사용자 메뉴",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfODkg/MDAxNTg0NDU1MjM0MjA3.YVCVngkUJWvK-qgQ3Hk_m6X-6deElKxa9GGWKNgtndMg.IOWGF83YP_bjPDZac8LlLqQnAAVdUeEkKWxAiNDGuBYg.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_%EC%82%AC%EC%9A%A9%EC%9E%90_%EB%A9%94%EB%89%B4.jpg?type=w966",
    mean: "사용자의 워하는 메뉴를 선택합니다."
  },  {
    label: "해당 차량 검색",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfMTky/MDAxNTg0NDU1MjM0MjA5.32RZmWjuacf1al7ehxatmJivp9xv_0LlGHgORpYwJwwg.wTCwGJ4A1UYp9aK9uNx6LV_sZdyu_QWvLrYhoKRfvNog.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_%EC%82%AC%EC%9A%A9%EC%9E%90_%EA%B2%80%EC%83%89%ED%8E%98%EC%9D%B4%EC%A7%80.jpg?type=w966",
    mean: "차량을 검색합니다."
  },  {
    label: "해당 차량 검색",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfMjc3/MDAxNTg0NDU1MjM0MjA4.IB07BzPKdmYLSPNgL7-Cq7YNSJW6qoS12iKHSDOpi9og.r16j1UsAcOgo4LJftiIF8QtKbkewxcxrOstn6FK67h8g.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_%EC%82%AC%EC%9A%A9%EC%9E%90_%EA%B2%80%EC%83%89%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%B0%A8%EB%9F%89_%EC%84%A0%ED%83%9D.jpg?type=w966",
    mean: "검색한 차량을 간편하게 추가를 합니다."
  },  {
    label: "관리자 페이지",
    imgPath:
      "https://postfiles.pstatic.net/MjAyMDAzMTdfMTQ2/MDAxNTg0NDU1MjM0MTk1.fZT_y0eeIdsUl6TbpROF2MEGJqBmceLtf-NVJWV_cg0g.RiO97IThOsBainMnJx7fjXOC6fZLSzIBFc4YIZfMCRgg.JPEG.mjm7028/%EC%BA%A1%EC%8A%A4%ED%86%A4_%ED%8E%98%EC%9D%B4%EC%A7%80_%EA%B5%AC%EC%83%81_Admin_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.jpg?type=w966",
    mean: "관리자 페이지 입니다."
  },
];

//캐러셀 각 부분 속성
const useStyles = makeStyles(theme => ({
  root: {
    // maxWidth: "20em",
    // maxHeight: "30em",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 30,
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  img: {
    display: "block",
    margin: "auto",
    position: "center",
    maxHeight: "30rem",
    maxWidth: "17rem",
    overflow: "hidden",
    width: "100%",
    height: "100%"
  },
  mean: {
    display: "flex",
    alignItems: "center",
    textAlign:'center',
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
    height: "5rem",
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  },
  title: {
    textAlign:'center',
    fontSize: 20,
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
  },
  text: {
    color: '#0ca678',
    fontFamily:'a두리둥실,Jua,serif',
  },
  button: {
    fontFamily:'a두리둥실,Jua,serif',
  },
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title}>사이트 사용 방법</Typography>
      <Paper square elevation={0} className={classes.header}>
        <Typography className={classes.header}>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Paper square elevation={0} className={classes.mean}>
        <Typography className={classes.text}>{tutorialSteps[activeStep].mean}</Typography>
      </Paper>
      <MobileStepper
        className={classes.button}
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            className={classes.button}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button className={classes.button} size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
