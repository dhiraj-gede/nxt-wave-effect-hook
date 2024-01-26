import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Box,
} from "@mui/material";

function Assignments() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState("");

  const handleOpen = (hint) => {
    setHint(hint);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{margin : "6rem 0 0 1rem"}} className="Assignments">
      <h1>Assignments</h1>

      <h2>Task 1: Data Fetching</h2>
      <p>
        Perform data fetching using useEffect and display the fetched data in
        your component.
      </p>
      <p>
        <strong>API: </strong>{" "}
        <em>https://jsonplaceholder.typicode.com/posts</em>
      </p>
      <pre>{`import React, { useState, useEffect } from 'react';

          const UserPosts = ({ userId }) => {
            const [posts, setPosts] = useState([]);

            useEffect(() => {
              // Fetch data here
            }, []);

            return (
              <div>
                {posts.map((post) => (
                  <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                  </div>
                ))}
              </div>
            );
          };

          export default UserPosts;`}</pre>
      <Button
        variant="contained"
        onClick={() =>
          handleOpen(
            "Use the fetch API or axios to fetch data from an API inside the useEffect hook. Remember to include an empty dependencies array to only run the fetch on the initial render."
          )
        }
      >
        Hint
      </Button>

      <h2>Task 2: Timer Component</h2>
      <p>
        Create a timer component that updates the displayed time every second
        using useEffect.
      </p>
      <pre>{`import React, { useState, useEffect } from 'react';

        const CountdownTimer = ({ initialValue }) => {
          // Add your state and useEffect logic here

          return (
            <div>
              {/* Display the timer value */}
            </div>
          );
        };

        export default CountdownTimer;`}</pre>
      <Button
        variant="contained"
        onClick={() =>
          handleOpen(
            "Use the setInterval function to update the time every second. Remember to clear the interval in the cleanup function."
          )
        }
      >
        Hint
      </Button>

      <h2>Task 3: Form Input Validation</h2>
      <p>
        Build a form input validation component that validates user input and
        shows error messages using useEffect.
      </p>
      <pre>{`import React, { useState, useEffect } from 'react';

          const ValidatedInput = ({ validationFunction, errorMessage }) => {
            // Add your state and useEffect logic here

            return (
              <div>
                {/* Create the input field and display the error message if needed */}
              </div>
            );
          };

          export default ValidatedInput;
        `}</pre>
      <Button
        variant="contained"
        onClick={() =>
          handleOpen(
            "Use the useEffect hook to validate the input whenever it changes. The input state variable should be included in the dependencies array."
          )
        }
      >
        Hint
      </Button>

      <h2>Task 4: Window Resize Listener</h2>
      <p>
        Develop a component that listens to the window's resize event and
        displays the current window size using useEffect.
      </p>
        <pre>{`import React, { useState, useEffect } from 'react';

          const WindowSize = () => {
            // Add your state and useEffect logic here

            return (
              <div>
                {/* Display the current window size here */}
              </div>
            );
          };

          export default WindowSize;`}
        </pre>
      <Button
        variant="contained"
        onClick={() =>
          handleOpen(
            "Use the addEventListener function to listen for the resize event. Remember to remove the event listener in the cleanup function."
          )
        }
      >
        Hint
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Hint"}</DialogTitle>
        <DialogContent>
          <DialogContentText>{hint}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
      <div>
        <h2>References</h2>
        <ul>
          <li>
            <a href="https://www.clientside.dev/blog/react-use-effect-practice-exercises">
              https://www.clientside.dev/blog/react-use-effect-practice-exercises
            </a>
          </li>
          <li>
            <a href="https://react.dev/reference/react/useEffect">
              Official React Documentation
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Assignments;
