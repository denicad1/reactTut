import styled from "./nameInput.module.css";
import InputFields from "./InputFields/InputFields";
import React, { useState } from "react";

function NameInput(props) {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");

	const userName = (info) => {
		setName(info);
	};
	const userAge = (info) => {
		setAge(info);
	};
	const allInput = (e) => {
		e.preventDefault();
		const user = { age, name };
		props.userInfo(user);
		setName("");
		setAge("");
	};
	return (
		<form onSubmit={allInput}>
			<InputFields
				infoAge={userAge}
				infoName={userName}
				age={age}
				name={name}
			></InputFields>
			<button type="submit"> Submit Info</button>
		</form>
	);
}

export default NameInput;
