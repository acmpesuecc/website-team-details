import React from 'react';
import TeamMemberList from "./Components/TeamMemberList/TeamMemberList"
import "./App.css"
import Heading from "./Components/Heading/Header"
import Navigationbar from "./Components/NavigationBar/Navbar"

function App() {
  return (
    <div>
      <Navigationbar />
      <Heading />
      <TeamMemberList />
    </div>
  );
}

export default App;
