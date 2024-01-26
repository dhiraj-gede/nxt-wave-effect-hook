import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";

const questions = [
  {
    question: "What is the purpose of the useEffect hook in React?",
    options: [
      "To manage state",
      "To handle side effects",
      "To create context",
      "To manipulate the DOM",
    ],
    answer: "To handle side effects",
  },
  {
    question: "How many arguments does useEffect take?",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two",
  },
  {
    question: "What does the second argument to useEffect represent?",
    options: [
      "The cleanup function",
      "The effect function",
      "The dependency array",
      "The initial state",
    ],
    answer: "The dependency array",
  },
  {
    question:
      "What happens if the dependency array is not provided to useEffect?",
    options: [
      "The effect runs once and never again",
      "The effect runs on every render",
      "The effect never runs",
      "The effect runs only when the component unmounts",
    ],
    answer: "The effect runs on every render",
  },
  {
    question: "What is the purpose of the cleanup function in useEffect?",
    options: [
      "To prevent memory leaks",
      "To update the state",
      "To trigger the effect",
      "To handle errors",
    ],
    answer: "To prevent memory leaks",
  },
  {
    question: "How do you ensure a useEffect hook runs only once?",
    options: [
      "By providing an empty dependency array",
      "By providing a dependency array with all state and props",
      "By not providing a dependency array",
      "By providing the initial state as a dependency",
    ],
    answer: "By providing an empty dependency array",
  },
];

function MCQ1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    if (submitted) {
      if (questions[currentQuestion].answer === selectedOption) {
        setScore((prevScore) => prevScore + 2);
      } else {
        setIncorrectAnswers((prevIncorrectAnswers) => [
          ...prevIncorrectAnswers,
          {
            question: questions[currentQuestion].question,
            selectedOption,
            correctOption: questions[currentQuestion].answer,
          },
        ]);
      }
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
        setSelectedOption("");
        setSubmitted(false);
      }
    }
  }, [submitted, currentQuestion, selectedOption]);

  return (
    <Box sx={{ width: "100%", height: {xs:'90vh', md: '70vh'}, p: 2, bgcolor: "background.paper" }}>
      <Typography variant="h4" gutterBottom>
        MCQ Exam
      </Typography>
      {!submitted && currentQuestion < questions.length ? (
        <Grid container spacing={2} sx={{ height: {md: '70vh'}}}>
          <Grid item xs={12} md={6}>
            <FormLabel component="legend">
              {questions[currentQuestion].question}
            </FormLabel>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs={12} md={5} justify="flex-end">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="options"
                name="options"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                {questions[currentQuestion].options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "center", height: '4rem', gap: 5 }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => setSubmitted(true)}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setCurrentQuestion(currentQuestion + 1)}
            >
              Skip
            </Button>
          </Grid>
        </Grid>
      ) : (
        <div>
          <h2>Your score is: {score}</h2>
          {incorrectAnswers.length > 0 && (
            <div>
              <h3>Incorrect Answers:</h3>
              {incorrectAnswers.map((item, index) => (
                <p key={index}>
                  {item.question} - Your answer: {item.selectedOption} - Correct
                  answer: {item.correctOption}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </Box>
  );
}

export default MCQ1;
