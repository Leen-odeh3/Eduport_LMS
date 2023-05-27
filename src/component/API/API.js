import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "./API.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return <>Loading...</>;
};
const btn = [
  "Web Design ",
  "Development",
  " Marketing",
  "Graphic Design",
  "Finance"
];
const Courses = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const ShowCourse = () => {
    return (
      <>
        <div className="btnall">
          {btn.map((e) => (
            <Button
              style={{
                color: "#066ac9",
                backgroundColor: "rgba(6, 106, 201, 0.25)",
                marginRight: "20px",
              }}
            >
              {e}
            </Button>
          ))}
        </div>
        <div className="allco">
          {filter.map((Courses) => {
            return (
              <>
                <Card sx={{ maxWidth: 350 }}>
                  <CardMedia
                    sx={{ height: 240 }}
                    image={Courses.img}
                    title="green iguana"
                  />
                  <CardContent>
                    <Button
                      style={{ color: "#0cbc87", fontWeight: "bold" }}
                      endIcon={<FavoriteBorderIcon />}
                    >
                      {" "}
                      {Courses.level}
                    </Button>
                    <Typography gutterBottom variant="h5" component="div">
                      {Courses.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {Courses.des}
                    </Typography>

                    {Courses.rate}
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      startIcon={
                        <AccessTimeIcon style={{ color: "#d6293e" }} />
                      }
                    >
                      {Courses.time}
                    </Button>
                    <Button
                      size="small"
                      startIcon={
                        <BackupTableIcon style={{ color: "#fd7e14" }} />
                      }
                    >
                      {Courses.lec}
                    </Button>
                  </CardActions>
                </Card>
              </>
            );
          })}{" "}
        </div>
      </>
    );
  };
  let Componentmouted = true;

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const response = await fetch(
        "https://run.mocky.io/v3/d63241e4-6ccb-4ba5-a9b6-3b2ed3acbc31"
      );
      if (Componentmouted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        Componentmouted = false;
      };
    };
    getCourses();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Most Popular Courses</h1>
          <p>Choose from hundreds of courses from specialist organizations</p>
        </div>
      </div>
      <div>{loading ? <Loading /> : <ShowCourse />}</div>
    </div>
  );
};

export default Courses;
