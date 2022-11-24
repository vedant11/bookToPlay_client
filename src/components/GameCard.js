import React from 'react';
import '../style/Card.css';

const GameCard = (props) => {
	const backgroundStyle = {
		backgroundImage: `url('/images/${props.gameVal}.jpg')`,
	};

	return (
		<div>
			<div
				className='card-button'
				style={backgroundStyle}
				onClick={() => {
					props.onClick(props.gameVal);
				}}
			/>
		</div>
	);
};
export default GameCard;
