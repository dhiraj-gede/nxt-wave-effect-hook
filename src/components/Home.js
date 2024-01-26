import React from "react";
import Navigation from "./Navigation";
import { Route, Routes } from "react-router-dom";
import WhatIsEffectHook from "./modules/Topics/WhatIsEffectHook";
import SideEffectsAndSync from "./modules/Topics/SideEffectsAndSync";
import Syntax from "./modules/Topics/Syntax";
import Dependencies from "./modules/Topics/Dependencies";
import Avoid from "./modules/Topics/Avoid";
import WhenToUseSideEffect from "./modules/Topics/WhenToUseSideEffect";
import CleanUp from "./modules/Topics/CleanUp";
import NavBar from "./Navbar/NavBar";
import { Box } from "@mui/material";
import BasicCard from "./Card/Card";
import Topics from "./modules/Topics/Topics";
import Summary from "./modules/Summary/Summary";
import MCQ1 from "./modules/MCQ's/MCQ1";
import Assignments from "./modules/Assignments/Assignment1";

function Home({ window }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
  return (
    <div className="home">
      <NavBar
        handleDrawerOpen={handleDrawerToggle}
        open={open}
        isClosing={isClosing}
        mobileOpen={mobileOpen}
        handleDrawerClose={handleDrawerClose}
        handleDrawerTransitionEnd={handleDrawerTransitionEnd}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        sx={{
          margin: { sm: `4rem 0 0 15rem`, xs: "3.52rem 0 0 0" },
        }}
      >
       
        <Routes>
          <Route path="/topics" element={<WhatIsEffectHook />} />
          <Route
            path="/summary"
            element={<Summary />}
          />
          <Route path="/syntax" element={<Syntax />} />
          <Route
            path="/mcqs"
            element={<MCQ1 />}
          />
          <Route path="/assignments" element={<Assignments />} />
          <Route path="/topics/what-is-effect-hook" element={<WhatIsEffectHook />} />
          <Route
            path="/topics/side-effects-and-synchronization"
            element={<SideEffectsAndSync />}
          />
          <Route path="/topics/syntax" element={<Syntax />} />
          <Route
            path="/topics/when-to-use-effect-hook"
            element={<WhenToUseSideEffect />}
          />
          <Route path="/topics/dependencies" element={<Dependencies />} />
          <Route path="/topics/things-to-avoid" element={<Avoid />} />
          <Route path="/topics/cleanup-function" element={<CleanUp />} />
        </Routes>
      </Box>
    </div>
  );
}

export default Home;
