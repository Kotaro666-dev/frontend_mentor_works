import React, {useState, useEffect }from "react";
import Wrapper from "../Helper/Wrapper";

import classes from './Result.module.css';

const Result = (props) => {
	const [tipAmount, setTipAmount] = useState(0);
	const [totalAmount, setTotalAmount] = useState(0);

	const roundUpToTthirdDecimalPlace = (number) => {
		return (Math.floor(number * 100) / 100)
	}

	useEffect(()=>{
		const newTipAmount = props.userInput.bill * props.userInput.tip;
		const newTipPerPerson = newTipAmount / props.userInput.people;
		const newTotalAmountPerPerson = (props.userInput.bill + newTipAmount) / props.userInput.people;

		if (newTipAmount === 0 || newTotalAmountPerPerson === 0) {
			return;
		}

		setTipAmount(roundUpToTthirdDecimalPlace(newTipPerPerson));
		setTotalAmount(roundUpToTthirdDecimalPlace(newTotalAmountPerPerson));
	})

	return (
		<Wrapper className={classes.wrapper}>
			<div>${tipAmount}</div>
			<div>${totalAmount}</div>
		</Wrapper>
	);
}

export default Result;