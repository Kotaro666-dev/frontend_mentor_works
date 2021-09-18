import React, { useState } from "react";

import classes from './UserInput.module.css';
import Card from "../UI/Card";

const tipsSelection = [
	{id: '5%', percent: '5%', isSelected: false},
	{id: '10%', percent: '10%', isSelected: false},
	{id: '15%', percent: '15%', isSelected: false},
	{id: '25%', percent: '25%', isSelected: false},
	{id: '50%', percent: '50%', isSelected: false},
	{id: 'Custom', percent: 'Custom', isSelected: false},
];

const UserInput = (props) => {
	const [bill, setBill] = useState('');
	const [people, setPeople] = useState('1');
	const [tips, setTips] = useState(tipsSelection);
	const [tip, setTip] = useState('');

	const onChangeBill = (event) => {
		setBill(event.target.value);
	}

	const onSelectTip = (id) => {
		setTips((prevTips) => {
			const newTips = prevTips.map((tip) =>
				tip.id === id
				? {id: tip.id, percent: tip.percent, isSelected: true}
				: {id: tip.id, percent: tip.percent, isSelected: false}
			);
			return (newTips);
		});
		setTip(id);
	}

	const onChangePeople = (event) => {
		setPeople(event.target.value);
	}

	const resetField = () => {
		setBill('');
		setTips(tipsSelection);
		setTip('');
		setPeople('1');
	}

	const addUserInput = (event) => {
		event.preventDefault();

		if (bill.trim().length === 0) {
			console.log('bill empty');
			return ;
		}
		if (tip.trim().length === 0) {
			console.log('tip is not selected');
			return ;
		}
		if (people.trim().length === 0) {
			console.log('people empty');
			return ;
		}

		props.setUserInput(bill, tip, people);
		resetField();
	}

	return(
		<form onSubmit={addUserInput} className={classes.input}>
			<label>Bill</label>
			<input id="bill" type="text" onChange={onChangeBill} value={bill} className={classes.input}/>
			<label>Select Tip %</label>
			<Card className={classes.card}>
				{
					tips.map((tip) => (
						<option key={tip.id} className={`${classes.tip_card} ${tip.isSelected && classes.tip_card_selected}`} onClick={() => onSelectTip(tip.id)}>
							{tip.percent}
						</option>
					))
				}
			</Card>
			<label>Number of People</label>
			<input id="numberOfPeople" type="text" onChange={onChangePeople} value={people} className={classes.input} />
			<button type="submit">Go</button>
		</form>
	);
}

export default UserInput;