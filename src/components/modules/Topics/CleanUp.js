import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { markModuleCompleted } from '../../../redux/actions';
import { Box, Button, Container, Typography } from '@mui/material';
import Topics from './Topics';
import { Link } from 'react-router-dom';

function CleanUp() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("Cleanup function"));
    console.log(completedModules);
  }

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        Cleanup Function in useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        The `useEffect` hook in React allows for a cleanup function[^1^][1][^2^][2]. This function is declared as a return statement within the `useEffect` function[^3^][4]. It runs immediately before the effect is re-run or when the component is unmounted[^3^][4].
      </Typography>
      <Typography variant="body1" gutterBottom>
        The cleanup function is very useful because it allows us to remove unnecessary behavior or prevent memory leaking issues[^2^][2]. It can be used to unsubscribe to a websocket component, or dismount before an async operation finishes[^2^][2].
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here is an example of how to use the cleanup function in `useEffect` hook[^2^][2]:
      </Typography>
      <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
        {`useEffect(() => {
  // Side effect function
  // ...
  return () => {
    // Cleanup function
  };
}, [/* dependencies */]);`}
      </Box>
      <Typography variant="body1" gutterBottom>
        In this example, the `useEffect` hook takes a function that contains the code for the side effect[^1^][1]. If a function is returned from this function, it will be used as the cleanup function[^1^][1].
      </Typography>
      {!completedModules.includes("Cleanup function") && 
      // <Link to="/mcqs" >
      <Button variant="contained" sx={{marginTop: '4rem'}} onClick={handleCompletion} color="primary">
        Mark As Complete
      </Button>
      // </Link>
      }
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

export default CleanUp;
