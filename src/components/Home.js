import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import GameCard from './GameCard';
import GameForm from './GameForm';
import { games } from '../data/data';
import '../style/Home.css'

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
			<Modal show={show} onHide={handleClose} size='lg' centered>
				<Modal.Header closeButton className='modal-header px-4'>
					<Modal.Title className='modal-title ms-auto text-uppercase'>{formGameType}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<GameForm gameType={formGameType} />
				</Modal.Body>
			</Modal>
		</>
	);
};

export default Home;
