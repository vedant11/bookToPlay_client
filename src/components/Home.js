import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import GameCard from './GameCard';
import GameForm from './GameForm';
import { games } from '../data/data';

const Home = () => {
	const [show, setShow] = useState(false);
	const [formGameType, setFormGameType] = useState('carrom');
	const handleClose = () => setShow(false);
	const handleShow = (gameType) => {
		setShow(true);
		setFormGameType(gameType);
	};
	const gamesRows = games.map((val) => {
		return (
			<Row key={val}>
				<GameCard gameVal={val} onClick={handleShow} />
			</Row>
		);
	});

	return (
		<>
			<Container>{gamesRows}</Container>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>{formGameType}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<GameForm gameType={formGameType} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Home;
