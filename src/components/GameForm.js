import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TimePicker from 'react-bootstrap-time-picker';

import { gamesData, URL } from '../data/data';
import '../style/Form.css';
import Swal from 'sweetalert2';

function GameForm(props) {
	const [equipments, setEquipments] = useState('None');
	const [day, setDay] = useState('');
	const [timeSlot, setTimeSlot] = useState('8:00');
	const [time, setTime] = useState(0);
	const [headCount, setHeadCount] = useState('');
	const [countOptions, setCountOptions] = useState([]);
	const currentGameData = gamesData[props.gameType];
	const isMounted = useRef(false);

	useEffect(() => {
		if (isMounted.current) {
			checkAndSetHeadForm();
		} else {
			isMounted.current = true;
			console.log(countOptions);
			setCountOptions(['Select number of players']);
			return;
		}
	}, [equipments, day, timeSlot]);

	const checkAndSetHeadForm = () => {
		if (
			(equipments === 'None' &&
				currentGameData['equipments'].length !== 0) ||
			day === '' ||
			timeSlot === ''
		)
			return;
		console.log(
			'checking',
			equipments,
			equipments === 'None',
			currentGameData['equipments'],
			currentGameData['equipments'] !== [],
			day === '',
			day,
			timeSlot,
			timeSlot === ''
		);
		console.log('passed');
		fetch(URL)
			.then((res) => {
				res.json();
			})
			.then((res) => {
				console.log(res);
			});
		let maxCount = 2;
		let countOptionsCopy = [];
		for (let i = 1; i <= maxCount; i++) countOptionsCopy.push(i);
		setCountOptions(countOptionsCopy);
		console.log('changed countOptions', countOptions);
	};

	const submitForm = (e) => {
		e.preventDefault();
		// alert('assume I just submitted the form');
		console.log('submittedForm', equipments, day, timeSlot, headCount);
		props.onClick();
		Swal.fire({
			title: 'Success!',
			text:
				'Your slot has been booked. You will receive an email regarding it!',
			icon: 'success',
			confirmButtonText: 'OMG!! I am so excited 🤩',
		});
	};

	const generateChoices = (fieldGroup) =>
		currentGameData[fieldGroup].map((val, idx) => (
			<Form.Check
				onChange={(e) => {
					if (fieldGroup === 'equipments') {
						setEquipments(e.target.value);
					} else if (fieldGroup === 'days') {
						setDay(e.target.value);
					}
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
	return (
		<Form>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				{generateChoices('equipments')}
			</Form.Group>
			<Form.Group className='mb-3' controlId='formBasicEmail'>
				{generateChoices('days')}
			</Form.Group>
			<TimePicker
				className='mb-3	'
				start={day === 'Tomorrow' ? '08:00' : '15:30'}
				end='18:00'
				step={30}
				onChange={(e) => {
					setTimeSlot(
						Math.trunc(e / 3600) +
							':' +
							((e / 3600) % 1 === 0.5 ? '30' : '00')
					);
					setTime(e);
				}}
				value={time}
			/>
			<Form.Group className='mb-3'>
				<Form.Select
					aria-label='Default select example'
					onChange={(e) => setHeadCount(e.target.value)}>
					{countOptions.map((val, idx) => (
						<option value={val} key={idx}>
							{val}
						</option>
					))}
				</Form.Select>
			</Form.Group>
			<Button variant='primary' onClick={(e) => submitForm(e)}>
				Submit
			</Button>
		</Form>
	);
}

export default GameForm;
