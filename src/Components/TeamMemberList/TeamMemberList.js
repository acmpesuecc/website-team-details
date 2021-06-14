import React, { useEffect, useState } from 'react';
import Tabletop from "tabletop";
import TeamMemberData from './TeamMemberdata';
import "./TeamMemberList.css"
import { makeStyles } from '@material-ui/core/styles';
import Dropdown from 'react-bootstrap/Dropdown'

const useStyles = makeStyles((theme) => ({
  root: {
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
      .catch((err) => console.warn(err))
  }
    , []);

  data.sort((a, b) => a["Graduation Year"] - b["Graduation Year"]);

  const firstYearData = []
  const secondYearData = []
  const thirdYearData = []

  for (let i = 0; i < data.length; i++) {
    if (data[i]["Graduation Year"] === "2024") {
      firstYearData.push(data[i]);
    }
  }

  for (let i = 0; i < data.length; i++) {
    if (data[i]["Graduation Year"] === "2023") {
      secondYearData.push(data[i]);
    }
  }


  for (let i = 0; i < data.length; i++) {
    if (data[i]["Graduation Year"] === "2022") {
      thirdYearData.push(data[i]);
    }
  }

  thirdYearData.sort((a, b) => a.name.localeCompare(b.name))
  secondYearData.sort((a, b) => a.name.localeCompare(b.name))
  firstYearData.sort((a, b) => a.name.localeCompare(b.name))

  return (
    <div className={classes.root}>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Year
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#third">2022</Dropdown.Item>
          <Dropdown.Item href="#second">2023</Dropdown.Item>
          <Dropdown.Item href="#first">2024</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <br />
      <div className="deets" id="third" >
        <h1 className="Heading">2022</h1>
        <TeamMemberData teamMemberList={thirdYearData} />
        <br />
      </div>
      <div className="deets" id="second">
        <h1 className="Heading">2023</h1>
        <br />
        <TeamMemberData teamMemberList={secondYearData.sort()} />
      </div>
      <div className="deets" id="first">
        <h1 className="Heading">2024</h1>
        <br />
        <TeamMemberData teamMemberList={firstYearData.sort()} />
      </div>
    </div>
  );
}

export default TeamMemberList;