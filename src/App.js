import "./App.css";
import NameForm from "./NameForm";
import { useState } from "react";

function App() {
	const [usersList, setUsersList] = useState("");
	const addUser = (oldUser) => {
		const newUser = { id: Math.random(), ...oldUser };
		setUsersList((prevList) => {
			console.log(newUser, prevList);
			return [newUser, ...prevList];
		});
		console.log(usersList);
	};
	return (
		<div className="App">
			<NameForm finalInput={addUser}></NameForm>
		</div>
	);
}

export default App;
