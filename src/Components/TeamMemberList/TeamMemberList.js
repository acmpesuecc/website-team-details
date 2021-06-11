import React, { useEffect, useState } from 'react';
import Tabletop from "tabletop";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Grid from "@material-ui/core/Grid";
import "./TeamMemberList.css"

const useStyles = makeStyles((theme) => ({
    root:{
      paddingLeft: 50,
      paddingRight: 50,
      paddingTop: 20,
      textAlign: "center",
    },
  media: {
        height: 300,
        paddingLeft: 20,
        paddingRight: 20,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

function TeamMemberList() {
  const [data, setData] = useState([]);
  const classes = useStyles();
 
  useEffect(() => {
    Tabletop.init({
      key: "https://docs.google.com/spreadsheets/d/1Rc7BxL1Fgz9U3w63D3G5itCWmIF-P52LzKgmB1inhAw/edit?usp=sharing",
      simpleSheet: true
    })
      .then(
        (data) => setData(data)
      )
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className={classes.root}>
      <br />
      <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {data.map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card style={{backgroundColor: "#aad8d3"}} className="Card">
              <CardHeader
                title={item["name"]}
              />
              <div id="img-container" >
                <img
                  className="img-fluid"
                  id="teamImage"
                  src={item["Picture of yourself (Preferably 1:1)"]}
                  alt="hey" 
                />
              </div>
              <CardContent>
                <p className="synopsis">{item["1 small phrase about yourself"]}</p>
                <IconButton aria-label="add to favorites">
                  <a href={item["Github profile URL"]} ><i className="fab fa-github"></i></a>
                </IconButton>
                <IconButton aria-label="share">
                  <a href={item["Linkedin profile URL"]} ><i className="fab fa-linkedin-in"></i></a>
                </IconButton>
                <IconButton aria-label="share">
                  <a href={item["Instagram profile URL"]} ><i className="fab fa-instagram"></i></a>
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default TeamMemberList;