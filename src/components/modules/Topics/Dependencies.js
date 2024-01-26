import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  initializeModuleCompletion,
  markModuleCompleted,
} from "../../../redux/actions";
import { Box, Button, Container, Typography } from "@mui/material";
import Topics from "./Topics";
import { Link } from "react-router-dom";

function Dependencies() {
  const completedModules = useSelector((state) => state.completed);
  const dispatch = useDispatch();

  const handleCompletion = () => {
    dispatch(markModuleCompleted("Dependencies"));
    dispatch(initializeModuleCompletion("Things to avoid"));
    console.log(completedModules);
  };

  return (
    <Container>
      <Topics />
      <Typography variant="h4" gutterBottom>
        Dependencies in useEffect Hook in React
      </Typography>
      <Typography variant="body1" gutterBottom>
        The <em>`useEffect`</em> hook in React accepts a second argument, the
        dependencies array. This array is a collection of values
        that the <em>`useEffect`</em> hook depends on. If any of these values
        change between renders, the <em>`useEffect`</em> callback function is
        called.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Here are some ways of controlling side effects in <em>`useEffect`</em>
        hook:
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
        If the dependencies array is not provided, the <em>`useEffect`</em> function will
        run after every render. If an empty array is provided, the
        <em>`useEffect`</em> function will only run once after the initial
        render.
      </Typography>
      {!completedModules.includes("Dependencies") && (
        <Link to="/topics/things-to-avoid">
          <Button
          sx={{marginTop: '4rem'}}
            variant="contained"
            onClick={handleCompletion}
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

export default Dependencies;
