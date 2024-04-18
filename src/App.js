import React from "react";
import NavBar from "./components/NavBar/NavBar";
import "./Nav.css";
import "./app.css";
import Body from "./Body/Body";
import Post from "./Post/Post";
import { Originals,Action, comedy, Horror, Romance } from "./urls/url";








function App() {
  return (
    <div className="App">


      <NavBar/>
      <Body/>
      <Post url={Originals} title='Originals'/>
      <Post url={Action} title='Action' isSmall={true} />
      <Post url={comedy} title='Comedy' isSmall={true} />
      <Post url={Horror} title='Horror Movies' isSmall={true} />
      <Post url={Romance} title='Romantic Movies' isSmall={true} />
      
      
      
      
    
      
      
    </div>
  );
}

export default App;
