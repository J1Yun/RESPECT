// import axios from "axios";
// import { useEffect } from "react";
// // import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   const callApi = async () => {
//     axios.get("/api/apitest").then((res) => console.log(res.data.test));
//   };

//   useEffect(() => {
//     callApi();
//   }, []);

//   return <div>test</div>;
// }

// export default App;

import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import TestMainPage from "./testfolder/TestMainPage";
import SecondTestPage from "./testfolder/SecondTestPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TestMainPage} />
        <Route exact path="/second" component={SecondTestPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
