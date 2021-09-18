import React, { useState, useEffect } from "react";

import classes from './UserInput.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";

const tipsSelection = [
	{id: '5%', percent: '5%', number: 0.05, isSelected: false},
	{id: '10%', percent: '10%', number: 0.10, isSelected: false},
	{id: '15%', percent: '15%', number: 0.15, isSelected: false},
	{id: '25%', percent: '25%', number: 0.25, isSelected: false},
	{id: '50%', percent: '50%', number: 0.50, isSelected: false},
	{id: 'Custom', percent: 'Custom', number: 1, isSelected: false},
];

const errorMessage = [
	{id: 'bill', message: null},
	{id: 'tip', message: null},
	{id: 'people', message: null},
]

const UserInput = (props) => {
	const [bill, setBill] = useState('');
	const [people, setPeople] = useState('');
	const [tips, setTips] = useState(tipsSelection);
	const [tip, setTip] = useState(null);

	const [error, setError] = useState(errorMessage);


	useEffect(()=>{
		if (!props.shouldResetField) {
			return;
		}
		setBill('');
		setPeople('');
		setTips(tipsSelection);
		setTip(null);
	})

	const onChangeBill = (event) => {
		setBill(event.target.value);
	}

	const onSelectTip = (target) => {
		setTips((prevTips) => {
			const newTips = prevTips.map((tip) =>
				tip.id === target.id
				? {id: tip.id, percent: tip.percent, number: tip.number, isSelected: true}
				: {id: tip.id, percent: tip.percent, number: tip.number, isSelected: false}
			);
			return (newTips);
		});
		setTip(target.number);
	}

	const onChangePeople = (event) => {
		setPeople(event.target.value);
	}

	const addUserInput = (event) => {
		event.preventDefault();

		if (bill.trim().length === 0) {
			setError((prevState) => {
				const newState = prevState.map((item) =>
						item.id === 'bill'
						? {id: item.id, message: 'Enter some bill.'}
						: {id: item.id, message: null}
				);
				return (newState);
			});
			return ;
		}
		if (tip === null) {
			setError((prevState) => {
				const newState = prevState.map((item) =>
						item.id === 'tip'
						? {id: item.id, message: 'Select a tip.'}
						: {id: item.id, message: null}
				);
				return (newState);
			});
			return ;
		}
		if (people.trim().length === 0) {
			setError((prevState) => {
				const newState = prevState.map((item) =>
						item.id === 'people'
						? {id: item.id, message: 'Enter a number of people.'}
						: {id: item.id, message: null}
				);
				return (newState);
			});
			return ;
		}
		props.setUserInput(+bill, tip, +people);
	}

	return(
		<form onSubmit={addUserInput} className={classes.input}>
			<div className={classes.label_field}>
				<label>Bill</label>
				{error[0].message && <p className={classes.error_message}>{error[0].message}</p>}
			</div>
				<input id="bill" placeholder='0.00' type="text" onChange={onChangeBill} value={bill} className={classes.input}/>
			<div className={classes.label_field}>
				<label>Select Tip %</label>
				{error[1].message && <p className={classes.error_message}>{error[1].message}</p>}
			</div>
			<Card className={classes.card}>
				{
					tips.map((tip) => (
						<option key={tip.id} className={`${classes.tip_card} ${tip.isSelected && classes.tip_card_selected}`} onClick={() => onSelectTip(tip)}>
							{tip.percent}
						</option>
					))
				}
			</Card>
			<div className={classes.label_field}>
			<label>Number of People</label>
			{error[2].message && <p className={classes.error_message}>{error[2].message}</p>}
			</div>
			<input id="numberOfPeople" placeholder='0' type="text" onChange={onChangePeople} value={people} className={classes.input} />
			<Button type="submit" className={classes.button}>Go</Button>
		</form>
	);
}

export default UserInput;