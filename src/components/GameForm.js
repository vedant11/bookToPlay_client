import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';

import { gamesData } from '../data/data';
import '../style/Form.css';

function GameForm(props) {
	const [equipments, setEquipments] = useState('');
	const [day, setDay] = useState('');
	const [timeSlot, setTimeSlot] = useState('8:00');
	const [headCount, setHeadCount] = useState('');

	const submitForm = (e) => {
		e.preventDefault();
		alert('assume I just submitted the form');
		console.log('submittedForm', equipments, day, timeSlot, headCount);
	};

	const currentGameData = gamesData[props.gameType];
	const generateChoices = (fieldGroup) =>
		currentGameData[fieldGroup].map((val, idx) => (
			<Form.Check
				onChange={(e) => {
					if (fieldGroup == 'equipments')
						setEquipments(e.target.value);
					else if (fieldGroup == 'days') setDay(e.target.value);
				}}
				inline
				label={val}
				value={val}
				name={fieldGroup}
				type='radio'
				id={`inline-radio-${idx}`}
				key={idx}
			/>
		));
	let countOptions = [],
		maxCount = 4;
	for (let i = 0; i < maxCount; i++)
		countOptions.push(
			<option value={i + 1} key={i}>
				{i + 1}
			</option>
		);
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				{generateChoices('equipments')}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				{generateChoices('days')}
			</Form.Group>
			<TimePicker
				start='08:00'
				end='18:00'
				step={30}
				onChange={(e) => {
					setTimeSlot(
						Math.trunc(e / 3600) +
							':' +
							((e / 3600) % 1 === 0.5 ? '30' : '00')
					);
				}}
				value={0}
			/>
			<Form.Group className='mb-3'>
				<Form.Select
					aria-label='Default select example'
					onChange={(e) => setHeadCount(e.target.value)}>
					{countOptions}
				</Form.Select>
			</Form.Group>
			<Button variant='primary' onClick={(e) => submitForm(e)}>
				Submit
			</Button>
		</Form>
	);
}

export default GameForm;
