import React from "react";
import Card from "./Card/Card";
import { Grid, Paper, Container } from "@material-ui/core";
import useStyles from "./styles";

const Cards = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        columns={9}
        alignItems="center"
        justifyContent="space-around"
        container
      >
        <Grid spacing={1} sm={6} md={5} lg={3} item>
          <Card 
            title={'Travel Tracker'}
            description={'Created with HTML, CSS, ReactJS, and Material UI for the front end, and nodeJS and MongoDB for the backend. JWT and Google OAuth used for authentication.'}/>
        </Grid>

        <Grid sm={6} md={5} lg={3} item>
          <Card
            title={"Portfolio"}
            description={
              "The page you are currently on. The front end was created using React JS, Material UI, HTML, and CSS. The backend was created using Node JS, Express JS, and the Mailgun API to send emails"
            }
          />
        </Grid>

        <Grid sm={6} md={5} lg={3} item>
          <Card />
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
