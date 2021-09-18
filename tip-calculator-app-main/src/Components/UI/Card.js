import React from "react";
import Wrapper from "../Helper/Wrapper";

import classes from './Card.module.css';

const Card = (props) => {
	return(
		<Wrapper>
			props.children
		</Wrapper>
	);
}

export default Card;