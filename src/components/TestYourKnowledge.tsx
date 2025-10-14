import React, { useState } from "react";
import "./TestYourKnowledge.css";

type Question = {
  question: string;
  choices: string[];
  answer: number;
};

const questions: Question[] = [
  {
    question: "Who led the Israelites out of Egypt?",
    choices: ["Abraham", "Moses", "David", "Paul"],
    answer: 1,
  },
  {
    question: "What is the first book of the New Testament?",
    choices: ["Genesis", "Matthew", "Luke", "Acts"],
    answer: 1,
  },
  {
    question: "Who was swallowed by a great fish?",
    choices: ["Peter", "Elijah", "Noah", "Jonah"],
    answer: 3,
  },
  {
    question: "Which apostle denied Jesus three times?",
    choices: ["John", "James", "Thomas", "Peter"],
    answer: 3,
  },
  {
    question: "What is the last book of the Bible?",
    choices: ["Malachi", "Jude", "Revelation", "Acts"],
    answer: 2,
  },
  {
    question: "Who was known for his strength and long hair?",
    choices: ["Samson", "Solomon", "Saul", "Samuel"],
    answer: 0,
  },
  {
    question: "Where was Jesus born?",
    choices: ["Nazareth", "Bethlehem", "Jerusalem", "Galilee"],
    answer: 1,
  },
  {
    question: "Who built an ark to survive the flood?",
    choices: ["Abraham", "Moses", "Noah", "Jacob"],
    answer: 2,
  },
  {
    question: "Which disciple walked on water with Jesus?",
    choices: ["Peter", "John", "Andrew", "James"],
    answer: 0,
  },
  {
    question: "What did Jesus feed to the 5,000?",
    choices: [
      "Manna and quail",
      "Fish and bread",
      "Wine and cheese",
      "Milk and honey",
    ],
    answer: 1,
  },
];

const TestYourKnowledge: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(-1)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    setSubmitted(false);
    setAnswers(Array(questions.length).fill(-1));
    setCurrent(0);
  };

  const handleSelect = (cIdx: number) => {
    if (submitted) return;
    setAnswers((prev) => prev.map((ans, i) => (i === current ? cIdx : ans)));
  };

  const handleNext = () => {
    if (current < questions.length - 1) setCurrent(current + 1);
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const handleSubmit = () => setSubmitted(true);

  const score = answers.reduce(
    (acc, ans, idx) => (ans === questions[idx].answer ? acc + 1 : acc),
    0
  );

  return (
    <section className="test-knowledge-section" id="test-your-knowledge">
      <div className="container test-knowledge-container">
        <h2 className="test-knowledge-title">Bible Bee</h2>
        {!started ? (
          <button className="test-knowledge-start-btn" onClick={handleStart}>
            Start Quiz
          </button>
        ) : !submitted ? (
          <form
            className="test-knowledge-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <div className="test-knowledge-question">
              <div className="test-knowledge-qtext">
                {current + 1}. {questions[current].question}
              </div>
              <div className="test-knowledge-choices">
                {questions[current].choices.map((choice, cIdx) => (
                  <label
                    key={cIdx}
                    className={`test-knowledge-choice ${
                      answers[current] === cIdx ? "selected" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q${current}`}
                      value={cIdx}
                      checked={answers[current] === cIdx}
                      onChange={() => handleSelect(cIdx)}
                    />
                    {choice}
                  </label>
                ))}
              </div>
            </div>
            <div className="test-knowledge-nav">
              <button
                type="button"
                className="test-knowledge-prev-btn"
                onClick={handlePrev}
                disabled={current === 0}
              >
                Previous
              </button>
              {current < questions.length - 1 ? (
                <button
                  type="button"
                  className="test-knowledge-next-btn"
                  onClick={handleNext}
                  disabled={answers[current] === -1}
                >
                  Next
                </button>
              ) : (
                <button
                  className="test-knowledge-submit-btn"
                  type="submit"
                  disabled={answers[current] === -1 || answers.includes(-1)}
                >
                  Submit Answers
                </button>
              )}
            </div>
          </form>
        ) : (
          <div>
            <div className="test-knowledge-score">
              You scored <b>{score}</b> out of {questions.length}!
            </div>
            <div className="test-knowledge-review">
              {questions.map((q, idx) => (
                <div key={idx} className="test-knowledge-review-item">
                  <div>
                    {idx + 1}. {q.question}
                  </div>
                  <div>
                    <span
                      className={
                        answers[idx] === q.answer
                          ? "test-knowledge-correct"
                          : "test-knowledge-incorrect"
                      }
                    >
                      {answers[idx] !== -1
                        ? q.choices[answers[idx]]
                        : "No answer"}
                    </span>
                    {answers[idx] !== -1 && (
                      <span>
                        {" "}
                        {answers[idx] === q.answer
                          ? "(Correct)"
                          : "(Incorrect)"}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <button
              className="test-knowledge-retry-btn"
              type="button"
              onClick={handleStart}
            >
              Try Again
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestYourKnowledge;
