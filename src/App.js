import styled from "./App.module.css";
import NameForm from "./NameForm";
import { useState } from "react";

function App() {
	const [usersList, setUsersList] = useState([]);
	const addUser = (oldUser) => {
		const newUser = { id: Math.random(), ...oldUser };
		setUsersList((prevList) => [newUser, ...prevList]);
	};
	return (
		<div className={`${styled.App}`}>
			<NameForm finalInput={addUser} userList={usersList}></NameForm>
		</div>
	);
}

export default App;
