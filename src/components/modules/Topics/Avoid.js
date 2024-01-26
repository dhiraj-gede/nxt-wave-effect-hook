import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeModuleCompletion, markModuleCompleted } from '../../../redux/actions';
import { Box, Button, Container, Typography } from '@mui/material';
import Topics from './Topics';
import { Link } from 'react-router-dom';

function Avoid() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("Things to avoid"));
    dispatch(initializeModuleCompletion("Cleanup function"));
    console.log(completedModules);
  }

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        Things to Avoid with useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        When using the `useEffect` hook in React, there are several things you should avoid:
      </Typography>
      <Box ml={2}>
        <Typography variant="body1" gutterBottom>
          1. <strong>Changing the order of hooks</strong>: The order of hooks invocation should not change between renderings. This is why hooks should not be called inside loops, conditions, or nested functions[^4^][5].
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. <strong>Using stale state</strong>: Always ensure that you're using the latest state inside your `useEffect` hook.
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. <strong>Creating stale closures</strong>: Be careful with closures in your `useEffect` hook.
        </Typography>
        <Typography variant="body1" gutterBottom>
          4. <strong>Using state for infrastructure data</strong>: Avoid using state for data that doesn't affect the rendering of the component.
        </Typography>
        <Typography variant="body1" gutterBottom>
          5. <strong>Forgetting to cleanup side-effects</strong>: Always remember to cleanup your side-effects in the return function of `useEffect`.
        </Typography>
      </Box>
      {!completedModules.includes("Things to avoid") && 
      <Link to="/topics/cleanup-function"  >
      <Button variant="contained" sx={{marginTop: '4rem'}} onClick={handleCompletion} color="primary">
        Mark As Complete
      </Button>
      </Link>
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

export default Avoid;
