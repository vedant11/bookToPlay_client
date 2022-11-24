import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import '../style/Form.css';

function BasicExample() {
	let titles = ['TT1', 'TT2'];
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				<div className='inline-elements'>
					<Pagination>
						<Pagination.Prev />
						<Pagination.Item>{titles[0]}</Pagination.Item>
						<Pagination.Item>{titles[1]}</Pagination.Item>
						<Pagination.Next />
					</Pagination>
				</div>

				<Form.Control type='email' placeholder='Enter email' />
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group className='mb-3' controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control type='password' placeholder='Password' />
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicCheckbox'>
				<Form.Check type='checkbox' label='Check me out' />
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
}

export default BasicExample;
