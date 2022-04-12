import React, { useState,useRef } from 'react';
import {data} from './question.json';
import './quiz.css';

export default function Ques() {
    let [Time, setTime] = useState(0);
    let CountRef = useRef(null);
    let NextRef = useRef(null);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (key) => {
		clearInterval(CountRef.current);
        clearTimeout(NextRef.current);
		let x = 0;
		if (key === data[currentQuestion].answer) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length ) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		CountRef.current = setInterval(() => {
            x += 1; 
            setTime(x);
        }, 1000);
 
        NextRef.current = setTimeout(() => {
			handleAnswerOptionClick(0);
        }, 5000);    
	};
	return (
		<div className='component'>
			{showScore ? (
				<div className='score-section'>
					You scored <div className="red">{score}</div> out of {data.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
						<p style={{ textAlign: "center" , fontSize:"20px"}}>  Time: {Time}sec</p>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className='question-text'>{data[currentQuestion].question}</div>
					</div>
					
					<div className='answer-section'>
						{data[currentQuestion].choices.map((answerOption,index) =>
						<button class="classical " name={index} onClick={() => handleAnswerOptionClick(answerOption)}>{answerOption}</button>
							

					)}
					</div>
				</>
			)}
		</div>
	);
}
