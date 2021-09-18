import React from "react";
import Wrapper from "../Helper/Wrapper";

import classes from './Title.module.css';

const Title = () => {
	return (
		<Wrapper className={classes.title}>
			<h1>SPLITTER</h1>
		</Wrapper>
	);
}

export default Title;