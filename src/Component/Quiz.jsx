// Quiz.js

import React from 'react';
import './Quiz.css';

const Quiz = () => {
  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <div className="question-header">
          <h2>Question 1 of 15</h2>
          <p>Which mammal can jump?</p>
        </div>
        <div className="question-options">
          <div className="option">
            <button className="option-button">Dog</button>
          </div>
          <div className="option">
            <button className="option-button">Elephant</button>
          </div>
          <div className="option">
            <button className="option-button">Goat</button>
          </div>
          <div className="option">
            <button className="option-button">Lion</button>
          </div>
        </div>
        <div className="control-buttons">
          <button className="previous-button">Previous</button>
          <button className="next-button">Next</button>
          <button className="quit-button">Quit</button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
