import React, { useState } from "react";

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

const UserInput = (props) => {
	const [bill, setBill] = useState('');
	const [people, setPeople] = useState('1');
	const [tips, setTips] = useState(tipsSelection);
	const [tip, setTip] = useState(null);

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

	const resetField = () => {
		setBill('');
		setTips(tipsSelection);
		setTip(null);
		setPeople('1');
	}

	const addUserInput = (event) => {
		event.preventDefault();

		if (bill.trim().length === 0) {
			console.log('bill empty');
			return ;
		}
		if (tip === null) {
			console.log('tip is not selected');
			return ;
		}
		if (people.trim().length === 0) {
			console.log('people empty');
			return ;
		}

		props.setUserInput(+bill, tip, +people);
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
						<option key={tip.id} className={`${classes.tip_card} ${tip.isSelected && classes.tip_card_selected}`} onClick={() => onSelectTip(tip)}>
							{tip.percent}
						</option>
					))
				}
			</Card>
			<label>Number of People</label>
			<input id="numberOfPeople" type="text" onChange={onChangePeople} value={people} className={classes.input} />
			<Button type="submit" className={classes.button}>Go</Button>
		</form>
	);
}

export default UserInput;