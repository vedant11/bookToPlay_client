import React from 'react';
import '../style/Card.css';

const GameCard = (props) => {
	const backgroundStyle = {
		backgroundImage: `url('/images/${props.image}.jpg')`,
	};

	return (
		<div>
			<div
				className='card-button'
				style={backgroundStyle}
				onClick={props.onClick}
			/>
		</div>
	);
};
export default GameCard;
