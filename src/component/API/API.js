import React, { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import './API.css'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        <div className="btnall">
          <Button>Web Design </Button>
          <Button>Development</Button>
          <Button> Marketing</Button>
          <Button>Graphic Design</Button>
          <Button>Finance</Button>
        </div>
        {filter.map((Courses) => {
          return (
            <>
              <div>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    {}
                    <Typography gutterBottom variant="h5" component="div">
                      {}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {}
                    </Typography>
                    {}
                  </CardContent>
                  <CardActions>
                    <Button size="small">{}</Button>
                    <Button size="small">{}</Button>
                  </CardActions>
                </Card>
              </div>
            </>
          );
        })}
      </>
    );
  };
  let Componentmouted = true;

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const response = await fetch(
        "https://64711f303de51400f72556eb.mockapi.io/course"
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
