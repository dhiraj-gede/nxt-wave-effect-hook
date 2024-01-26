import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { initializeModuleCompletion, markModuleCompleted } from '../../../redux/actions';
import { Box, Button, Container, Typography } from '@mui/material';
import Topics from './Topics';
import { Link } from 'react-router-dom';

function WhenToUseEffectHook() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("When to use Effect Hook"));
    dispatch(initializeModuleCompletion("Dependencies"));

    console.log(completedModules);
  }

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        When to Use useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        The `useEffect` hook in React is used to handle side effects in your functional components. Side effects are actions that occur outside of the normal render cycle, such as fetching data, updating the DOM, setting up subscriptions or timers, etc.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here are some common scenarios when you might want to use the `useEffect` hook:
      </Typography>
      <Box ml={2}>
        <Typography variant="body1" gutterBottom>
          1. <strong>Fetching data from an API</strong>: You can use `useEffect` to fetch data from an API when the component mounts, and update the state with the fetched data.
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. <strong>Setting up subscriptions or timers</strong>: If your component needs to set up a subscription to an external data source or a timer, you can do this in `useEffect`.
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. <strong>Manipulating the DOM</strong>: If you need to manually change the DOM outside of the normal render process, you can use `useEffect`.
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        The `useEffect` hook lets you synchronize your component with an external system. It runs after every render but you can control when it runs by specifying dependencies.
      </Typography>
      {!completedModules.includes("When to use Effect Hook") && 
      <Link to="/topics/dependencies" >
      <Button variant="contained"
            sx={{marginTop: '4rem'}}
            onClick={handleCompletion} color="primary">
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

export default WhenToUseEffectHook;
