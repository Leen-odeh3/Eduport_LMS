import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "./Carousal.css";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    label: "Lary Lawson- Designer",
    imgPath: "img/p.jpg",
  },
  {
    label: "Dennies Barret- Frontend Dev",
    imgPath: "img/pe.jpg",
  },
  {
    label: "LOuis crawfod- Android Dev",
    imgPath: "img/per.jpg",
  },
  {
    label: "carolyn Qrtiz- Backend Dev",
    imgPath: "img/pers.jpg",
  },
  {
    label: "Lyyn QrtiZ- IT Professor",
    imgPath: "img/perso.jpg",
  },
  {
    label: "Reta Harb- Designer",
    imgPath: "img/reta.png",
  }
];
function Carousal() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="carousal">
      <h2> Meet Our Team</h2>
      <Box sx={{ maxWidth: 330, flexGrow: 1 }}>
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            height: 40,
          }} >
          <Typography className="label">{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents>
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    borderRadius: "50%",
                    height: 300,
                    display: "block",
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}/>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft className="key" />
              ) : (
                <KeyboardArrowRight className="key" />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight className="key" />
              ) : (
                <KeyboardArrowLeft className="key" />
              )}
            </Button>
          }
        />
      </Box>
    </div>
  );
}

export default Carousal;
