import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, Container, Row } from 'react-bootstrap';
import GameCard from './GameCard';

const Home = () => {
	const [show, setShow] = useState(false);
	const [formGameType, setFormGameType] = useState('carrom');
	const handleClose = () => setShow(false);
	const handleShow = (gameType) => {
		setShow(true);
		setFormGameType(gameType);
	};

	return (
		<>
			<Container>
				<Row>
					<GameCard image='pool' onClick={() => handleShow('pool')} />
				</Row>
				<Row>
					<GameCard
						image='carrom'
						onClick={() => handleShow('carrom')}
					/>
				</Row>
				<Row>
					<GameCard image='tt' onClick={() => handleShow('tt')} />
				</Row>
				<Row>
					<GameCard
						image='chess'
						onClick={() => handleShow('chess')}
					/>
				</Row>
			</Container>
			<Modal show={show} onHide={handleClose} size='lg'>
				<Modal.Header closeButton>
					<Modal.Title>{formGameType}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Card className='text-center'>
						<Card.Header>Featured</Card.Header>
						<Card.Body>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in
								to additional content.
							</Card.Text>
							<Button variant='primary'>Go somewhere</Button>
						</Card.Body>
						<Card.Footer className='text-muted'>
							2 days ago
						</Card.Footer>
					</Card>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default Home;
