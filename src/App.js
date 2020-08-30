import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./Components/Layout/NavigationBar";
import Feeds from "./Components/HomePage/Feeds";
import LogIn from "./Components/Auth/LogIn";
import LogOut from "./Components/Auth/LogOut";
import Register from "./Components/Auth/Register";
import PostDetails from "./Components/Posts/PostDetails";
import CreateNewPost from "./Components/Posts/CreateNewPost";
import Firebase from "firebase";
import { FIREBASE_CONFIG as firebaseConfig } from "./config/firebaseConfig";

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <Feeds />
            </Route>
            <Route exact path="/newpost">
              <CreateNewPost />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <Route exact path="/logout">
              <LogOut />
            </Route>
            <Route exact path="/post/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
