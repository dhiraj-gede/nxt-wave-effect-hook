import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeModuleCompletion,
  markModuleCompleted,
} from "../../../redux/actions";
import { Box, Button, Container, Typography } from "@mui/material";
import Topics from "./Topics";
import { Link } from "react-router-dom";

function SideEffectsAndSync() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("Side effects and synchronization?"));
    dispatch(initializeModuleCompletion("Syntax"));

    console.log(completedModules);
  };

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        What are side effects in React?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Side effects are not predictable because they are actions which are
        performed with the "outside world."
      </Typography>
      <Typography variant="body1" gutterBottom>
        Common side effects include: Making a request to an API for data from a
        backend server To interact with browser APIs (that is, to use document
        or window directly) Using unpredictable timing functions like setTimeout
        or setInterval
      </Typography>
      <Typography variant="body1" gutterBottom>
      This is why useEffect exists: to provide a way to handle performing these side effects in what are otherwise pure React components.
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        The useEffect hook is particularly useful for tasks like updating the
        DOM, fetching data from API endpoints, setting up subscriptions or
        timers, etc. It’s a powerful tool that helps to keep your React
        code clean and easy to understand.
      </Typography>
      {!completedModules.includes("Side effects and synchronization?") && (
        <Link to="/topics/syntax">
          <Button
            variant="contained"
            onClick={handleCompletion}
            color="primary"
            sx={{marginTop: '4rem'}}
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

export default SideEffectsAndSync;
