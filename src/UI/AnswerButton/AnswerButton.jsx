import React from 'react';
import './AnswerButton.scss';

const AnswerButton = ({
	index,
	answer,
	handleAnswerClick,
	selectedAnswer,
	correctId,
}) => {
	const setButtonColor = index => {
		if (index !== selectedAnswer) {
			return;
		}

		const isCorrect = correctId === selectedAnswer;
		const style = {
			background: isCorrect ? '#64FF4A' : '#FF4A4A',
			color: '#FFFFFF',
		};
		return style;
	};
	const alphabetNumeration = index => {
		// create an array of the alphabet
		const alphabet = [
			'A',
			'B',
			'C',
			'D',
			'E',
			'F',
			'G',
			'H',
			'I',
			'J',
			'K',
			'L',
			'M',
			'N',
			'O',
			'P',
			'Q',
			'R',
			'S',
			'T',
			'U',
			'V',
			'W',
			'X',
			'Y',
			'Z',
		];

		// if the index is less than 26, return the corresponding letter from the alphabet array
		if (index < 26) {
			return alphabet[index];
		}
		// otherwise, return a combination of two letters
		else {
			// divide the index by 26 and find the remainder to determine the first letter
			const firstLetter = alphabet[Math.floor(index / 26) - 1];
			// use the remainder to determine the second letter
			const secondLetter = alphabet[index % 26];

			return firstLetter + secondLetter;
		}
	};
	return (
		<div
			key={answer}
			className='answer'
			style={setButtonColor(index)}
			onClick={() => handleAnswerClick(index)}
		>
			<div
				className='circle'
				style={
					index === selectedAnswer
						? {
								background: 'white',
								color: '#6c54ff',
						  }
						: {}
				}
			>
				{alphabetNumeration(index)}
			</div>
			<p>{answer}</p>
		</div>
	);
};

export default AnswerButton;
