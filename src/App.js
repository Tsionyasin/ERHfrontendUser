import React, { useState, useEffect } from "react";
import Profile from "./pages/profile/Profile.jsx";

import { Route, Switch } from "react-router-dom";
import Topbar from "./components/topbar/Topbar.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
// import Sidebar from "./components/sidebar/NewSidebar.jsx";

import "./App.css";
import Home from "./pages/home/Home.jsx";
import EditProfile from "./pages/profile/EditProfile.jsx";
import CompleteProfile from "./pages/completeProfile/CompleteProfile.jsx";
import Upload from "./pages/upload/Upload.jsx";
import PeerProfile from "./pages/peerProfile/PeerProfile.jsx";
import LoginRegister from "./pages/logIn/LogInRegister.jsx";

function App() {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    const { innerWidth: width } = window;
    if (width < 500) {
      setMobileView(true);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      if (width < 500) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (mobileView) {
      setSidebarOpen(false);
    } else {
      setSidebarOpen(true);
    }
  }, [mobileView]);

  return (
    <div>
      <Sidebar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <div
        style={{
          transition: "0.5s",
        }}
        className={sidebarIsOpen ? "content is-open" : "content"}
      >
        <Topbar toggleSidebar={toggleSidebar} />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/profile" component={Profile} />
           <Route exact path="/LoginRegister" component={LoginRegister} /> 
          <Route path="/profile/edit" component={EditProfile} />
          <Route path="/complete-profile" component={CompleteProfile} />
          <Route path="/upload/:username" component={Upload} />
          <Route path="/:username/profile" component={PeerProfile} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
