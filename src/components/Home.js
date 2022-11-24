import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Card, Container, Row } from 'react-bootstrap';
import GameCard from './Card';

const Home = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div>
			<>
				<Container>
					<Row>
						<GameCard image='carrom' onClick={handleShow} />
					</Row>
					<Row>
						<GameCard image='pool' onClick={handleShow} />
					</Row>
					<Row>
						<GameCard image='tt' onClick={handleShow} />
					</Row>
					<Row>
						<GameCard image='chess' onClick={handleShow} />
					</Row>
				</Container>
				<Modal show={show} onHide={handleClose} size='lg'>
					<Modal.Header closeButton>
						<Modal.Title>Modal heading</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Card className='text-center'>
							<Card.Header>Featured</Card.Header>
							<Card.Body>
								<Card.Title>Special title treatment</Card.Title>
								<Card.Text>
									With supporting text below as a natural
									lead-in to additional content.
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
		</div>
	);
};

export default Home;
