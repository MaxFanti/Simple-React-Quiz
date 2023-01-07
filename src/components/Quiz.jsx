import React, { useState } from 'react';
import './Quiz.scss';
import SimpleButton from '../UI/SimpleButton/QuizButton';
import AnswerButton from '../UI/AnswerButton/AnswerButton';
const Quiz = () => {
	const questions = [
		{
			title: 'What is a boolean in Java?',
			answers: [
				'A data type that can hold only one of two values: true or false',
				'A data type that can hold only numeric values',
				'A data type that can hold only characters',
				'A data type that can hold only strings',
			],
			correctId: 0,
		},
		{
			title:
				'What is the correct syntax for creating a new string object in Java?',
			answers: [
				'string s = "Hello";',
				'String s = "Hello";',
				's = new String("Hello");',
				'string s("Hello");',
			],
			correctId: 1,
		},
	];

	const [selectedAnswer, setSelectedAnswer] = useState(null);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [showResult, setShowResult] = useState(false);
	const progressProcent = (currentQuestion / questions.length) * 100;

	const handleAnswerClick = index => {
		if (selectedAnswer === null) {
			setSelectedAnswer(index);
			return;
		}
		if (selectedAnswer === questions[currentQuestion].correctId) {
			setScore(prev => prev + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowResult(true);
		}
		setSelectedAnswer(null);
	};
	return (
		<div className='body'>
			{showResult ? (
				<div className='result'>
					<img src='./img/trophy.svg' alt='trophy' />
					<p>Поздравляем</p>
					<h1>РЕЗУЛЬТАТ: {(score / questions.length) * 100}%</h1>
					<span>
						Вы ответили на{' '}
						<span style={{ color: '#6C54FF' }}>{questions.length}</span>{' '}
						вопросов и ответили на{' '}
						<span style={{ color: '#04CA00' }}>{score}</span> вопросов верно
					</span>
					<SimpleButton>Главное меню</SimpleButton>
				</div>
			) : (
				<>
					<div className='header'>
						<div className='progressBar'>
							<div
								className='progressPass'
								style={{ width: progressProcent + '%' }}
							></div>
						</div>
						<h1 className='question'>{questions[currentQuestion].title}</h1>
					</div>
					{questions[currentQuestion].answers.map((answer, index) => (
						<AnswerButton
							key={index}
							index={index}
							answer={answer}
							handleAnswerClick={handleAnswerClick}
							selectedAnswer={selectedAnswer}
							correctId={questions[currentQuestion].correctId}
						/>
					))}
				</>
			)}
		</div>
	);
};

export default Quiz;
