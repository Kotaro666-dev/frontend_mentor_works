import React, { useState } from 'react';
import Wrapper from './Components/Helper/Wrapper';
import UserInput from './Components/UserInput/UserInput'
import ResultClass from './Components/Result/Result'
import Title from './Components/Title/Title';
import Card from './Components/UI/Card';

function App() {
	const [userInput, setUserInput] = useState({bill: 0, tip: 0, people: 0});
	const [shouldResetField, setShouldResetField] = useState(false);

	const setUserInputHandler = (bill, tip, people) => {
		setUserInput({bill: bill, tip: tip, people: people});
	}

	const onClickResetButton = () => {
		setUserInput({bill: 0, tip: 0, people: 0});
		setShouldResetField(true);
	}

	return (
		<Wrapper>
			<Title />
			<Card>
				<UserInput setUserInput={setUserInputHandler} shouldResetField={shouldResetField}/>
				<ResultClass userInput={userInput} onClickResetButton={onClickResetButton}/>
			</Card>
		</Wrapper>
	);
}

export default App;
