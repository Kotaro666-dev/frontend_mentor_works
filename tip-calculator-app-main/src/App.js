import React, { useState } from 'react';
import Wrapper from './Components/Helper/Wrapper';
import UserInput from './Components/UserInput/UserInput'
import Result from './Components/Result/Result'
import Title from './Components/Title/Title';
import Card from './Components/UI/Card';

function App() {
	const [userInput, setUserInput] = useState({bill: '', tip: '', people: ''});

	const setUserInputHandler = (bill, tip, people) => {
		setUserInput({bill: bill, tip: tip, people: people});
	}

	return (
		<Wrapper>
			<Title />
			<Card>
				<UserInput setUserInput={setUserInputHandler}/>
				<Result userInput={userInput}/>
			</Card>
		</Wrapper>
	);
}

export default App;
