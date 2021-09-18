import React from 'react';
import Wrapper from './Components/Helper/Wrapper';
import UserInput from './Components/UserInput/UserInput'
import Result from './Components/Result/Result'
import Title from './Components/Title/Title';
import Card from './Components/UI/Card';

function App() {
	return (
		<Wrapper>
			<Title />
			<Card>
				<UserInput />
				<Result />
			</Card>
		</Wrapper>
	);
}

export default App;
