import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Assuming you have actions and reducers for module completion
import { initializeModuleCompletion, markModuleCompleted } from "../../../redux/actions";
import { Box, Button, Container, Typography } from "@mui/material";
import Topics from "./Topics";
import { Link } from "react-router-dom";

function WhatIsEffectHook() {
  const completedModules = useSelector((state) => state.completed);
  const initiatedModules = useSelector((state) => state.initiated);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("What is Effect Hook?"));
    dispatch(initializeModuleCompletion("Side effects and synchronization?"));
    console.log(completedModules);
    // console.log('what is effect hook completed');
  };
  useEffect(()=>{
    dispatch(initializeModuleCompletion("What is Effect Hook?"));
    console.log(initiatedModules)
  }, [])

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        The useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        The useEffect hook is a built-in function in React that allows you to
        perform side effects in your functional components. It serves as a
        replacement for lifecycle methods like componentDidMount,
        componentDidUpdate, and componentWillUnmount in class components.
      </Typography>
      <Typography variant="body1" gutterBottom>
        By using this Hook, you tell React that your component needs to do
        something after render. React will remember the function you passed
        (referred to as the “effect”), and call it later after performing the
        DOM updates. This hook runs on every render but there is also a way of
        using a dependency array using which we can control the effect of
        rendering.
      </Typography>
      <Typography variant="h6" gutterBottom>
        What exactly is an "effect"?
      </Typography>
      <Typography variant="body1" gutterBottom>
        The word effect refers to a functional programming term called a "side
        effect". But to really understand what a side effect is, we first have
        to grasp the concept of a pure function, For now lets understand what
        pure functions are, we'll get bact to side effect in next module You may
        not know this, most React components are intended to be pure functions.
      </Typography>
      <Typography variant="h6" gutterBottom>
        What are Components and pure funnctions
      </Typography>
      <Typography variant="body1" gutterBottom>
        Most React components are pure functions, meaning they receive an input
        and produce a predictable output of JSX. The input to a JavaScript
        function is arguments. What is the input to a React component, however?
        Props! Here we have a User component that has the prop name declared on
        it. Within User, the prop value is displayed in a header element.
        <span>

          <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
            {`export default function App() {
              return <User name="John Doe" />   
            }
            
            function User(props) {
              return <h1>{props.name}</h1>; // John Doe
            }`}
          </Box>
        </span>
        This is pure because, given the same input, it will always return the
        same output. If we pass User a name prop with value "John Doe", our
        output will always be John Doe. You might be saying, "Who cares? Why do
        we even have a name for this?" Pure functions have the great benefit of
        being predictable, reliable, and easy to test.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Here are some ways of controlling side effects in useEffect hook:
      </Typography>
      <Box ml={2}>
        <Typography variant="body1" gutterBottom>
          1. To run useEffect on every render, do not pass any dependency.
          <span>

          <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
            {`useEffect(() => {
              // Side effect function
              // ...
            }/*no dependency*/);`}
          </Box>
            </span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          2. To run useEffect only once on the first render, pass an empty array
          in the dependency.
          <span>

          <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
            {`useEffect(() => {
              // Side effect function
              // ...
            }, [/* empty dependency */]);`}
          </Box>
            </span>
        </Typography>
        <Typography variant="body1" gutterBottom>
          3. To run useEffect on change of a particular value, pass the state
          and props in the dependency array.
          <span>


          <Box component="pre" fontFamily="Monospace" bgcolor="#f5f5f5" p={1}>
            {`useEffect(() => {
              // Side effect function
              // ...
            }, [/* dependencies */]);`}
          </Box>
            </span>
        </Typography>
      </Box>
      <Typography variant="body1" gutterBottom>
        This hook is particularly useful for tasks like updating the DOM,
        fetching data from API endpoints, setting up subscriptions or timers,
        etc. It’s a powerful tool that helps to keep your React code clean and
        easy to understand.
      </Typography>
      {!completedModules.includes("What is Effect Hook?") && 
      <Link to="/nxt-wave-effect-hook/topics/side-effects-and-synchronization" > 
        <Button variant="contained"
            sx={{marginTop: '4rem'}}
            onClick={handleCompletion} color="primary">
          Mark As Complete
        </Button>
      </Link>
}
{completedModules.length===7 && 
      <Link to="/nxt-wave-effect-hook/mcqs" >
      <Button variant="contained" sx={{marginTop: '4rem'}} onClick={handleCompletion} color="primary">
        MCQ's
      </Button>
      </Link>
      }
    </Container>
  );
}

export default WhatIsEffectHook;
