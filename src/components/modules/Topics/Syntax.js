import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeModuleCompletion,
  markModuleCompleted,
} from "../../../redux/actions";
import { Box, Button, Container, Typography } from "@mui/material";
import Topics from "./Topics";
import { Link } from "react-router-dom";

function Syntax() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("Syntax"));
    dispatch(initializeModuleCompletion("When to use Effect Hook"));

    console.log(completedModules);
  };

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        Syntax of useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        The syntax of the useEffect hook in React is as follows:
      </Typography>
      <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
        {`import { useEffect } from 'react';

function MyComponent() {
  // 2. call it above the returned JSX  
  // 3. pass two arguments to it: a function and an array
  useEffect(() => {
    // Side effect function
  // ...
  },  [/* dependencies */]);
  
  // return ...
}`}
      </Box>
      <Typography variant="body1" gutterBottom>
        The `useEffect` hook takes two arguments:
      </Typography>
      <Box ml={2}>
        <Typography variant="body1" gutterBottom>
          1. **Side effect function**: This function contains the code for the
          side effect. It runs after every render unless you specify
          dependencies.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. **Dependencies array** (optional): If present, the side effect
          function will only run when the specified dependencies have changed
          since the last render.
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        If the dependencies array is not provided, the side effect function will
        run after every render. If an empty array is provided, the side effect
        function will only run once after the initial render.
      </Typography>
      {!completedModules.includes("Syntax") && (
        <Link to="/topics/when-to-use-effect-hook">
          <Button
            variant="contained"
            onClick={handleCompletion}
            sx={{marginTop: '4rem'}}
            color="primary"
          >
            Mark As Complete
          </Button>
        </Link>
      )}
      {completedModules.length===7 && 
            <Link to="/mcqs" >
            <Button variant="contained" sx={{marginTop: '4rem'}} onClick={handleCompletion} color="primary">
              MCQ's
            </Button>
            </Link>
            }
    </Container>
  );
}

export default Syntax;
