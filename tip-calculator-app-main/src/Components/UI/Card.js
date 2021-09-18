import React from "react";
import Wrapper from "../Helper/Wrapper";

import classes from './Card.module.css';

const Card = (props) => {
	return(
		<Wrapper className={`${classes.card} ${props.className}`}>
			{props.children}
		</Wrapper>
	);
}

export default Card;