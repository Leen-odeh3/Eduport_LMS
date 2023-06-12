import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import "./Fake.css";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Loading = () => {
  return <>Loading...</>;
};
const Courses = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const ShowCourse = () => {
    return (
      <>
        <div className="partco">
          {filter.map((Courses) => {
            return (
              <>
                <Card className={Courses.class}>
                  <CardMedia
                    sx={{
                      height: 150,
                      width: 150,
                      margin: "auto",
                      borderRadius: "50%",
                    }}
                    image={Courses.img}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {Courses.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {Courses.des}
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
          })}
        </div>
      </>
    );
  };
  let Componentmouted = true;

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const response = await fetch(
        "https://run.mocky.io/v3/d87ebf7c-0c81-4f6a-8ae5-ae63838312f6"
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
          <h1>Choose a Categories</h1>
          <p>Perceived end knowledge certainly day sweetness why cordially</p>
        </div>
      </div>
      <div>{loading ? <Loading /> : <ShowCourse />}</div>
    </div>
  );
};

export default Courses;
