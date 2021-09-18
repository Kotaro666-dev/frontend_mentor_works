import React, { useState } from 'react';
import Wrapper from './Components/Helper/Wrapper';
import UserInput from './Components/UserInput/UserInput'
import ResultClass from './Components/Result/Result'
import Title from './Components/Title/Title';
import Card from './Components/UI/Card';

function App() {
	const [userInput, setUserInput] = useState({bill: 0, tip: 0, people: 0});

	const setUserInputHandler = (bill, tip, people) => {
		setUserInput({bill: bill, tip: tip, people: people});
	}

	return (
		<Wrapper>
			<Title />
			<Card>
				<UserInput setUserInput={setUserInputHandler}/>
				<ResultClass userInput={userInput}/>
			</Card>
		</Wrapper>
	);
}

export default App;
