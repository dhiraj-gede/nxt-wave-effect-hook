import React from "react";
import { Box, Typography, Link } from "@mui/material";

// A component that displays the summary of the Effect hook of React
function Summary() {
  // Render the component
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Summary of the Effect Hook of React
      </Typography>
      <Typography variant="body1" paragraph>
        The Effect hook, useEffect, is a predefined hook in React that allows you
        to perform side effects from a function component. Side effects are
        any actions that affect something outside of the scope of the current
        function. For example, fetching data, updating the document title,
        setting up timers, etc. are side effects.
      </Typography>
      <Typography variant="body1" paragraph>
        The useEffect hook accepts two arguments: a function that contains the
        side effect code, and an optional array of dependencies that determines
        when the effect should run. By default, the effect runs after every
        render, but you can use the dependency array to control the effect of
        rendering. For example, you can pass an empty array to run the
        effect only once on the first render, or pass a state or prop value to
        run the effect only when that value changes.
      </Typography>
      <Typography variant="body1" paragraph>
        If the dependencies array is not provided, the <em>`useEffect`</em> function will
        run after every render. If an empty array is provided, the
        <em>`useEffect`</em> function will only run once after the initial
        render.
      </Typography>
      <Typography variant="body1" paragraph>
        The useEffect hook can also return a cleanup function that runs before
        the component is unmounted or before the next effect is executed.
        This is useful for removing any subscriptions, timers, or event
        listeners that were created by the effect.
      </Typography>
      <Typography variant="body1" paragraph>
        The useEffect hook can mimic the lifecycle methods of class-based
        components, such as componentDidMount, componentDidUpdate, and
        componentWillUnmount, but in a unified and simpler way. You can use
        multiple useEffect hooks in a single component to separate different
        types of side effects.
      </Typography>
      <Box sx={{position: 'relative', paddingBottom: "56.25%", height: 0}} >
        <iframe src="https://www.loom.com/embed/795bd45fb0c141f29dc0972f42096da6?sid=f7c0b47a-cf42-4a2f-8def-22b55ff56f76" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>
      </Box>
      <Typography variant="body1">
        Source:{" "}
        <Link to={"https://react.dev/reference/react/hooks#effect-hooks"} target="_blank">
        https://react.dev/reference/react/hooks#effect-hooks
        </Link>
      </Typography>
    </Box>
  );
}

export default Summary;
