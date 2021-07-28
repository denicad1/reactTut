import styled from "./nameInput.module.css";
import InputFields from "./InputFields/InputFields";
import React, { useState } from "react";

function NameInput(props) {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [valid, setValid] = useState(true);

	const userName = (info) => {
		setName(info);
	};
	const userAge = (info) => {
		setAge(info);
	};
	const allInput = (e) => {
		e.preventDefault();
		if (!age || !name) {
			setValid(true);
			return;
		}
		setValid(false);
		const user = { age, name };
		props.userInfo(user);
		setName("");
		setAge("");
	};
	return (
		<div className={`${styled.background}`}>
			<form onSubmit={allInput}>
				<InputFields
					className={`${valid && styled.invalid}`}
					infoAge={userAge}
					infoName={userName}
					age={age}
					name={name}
				></InputFields>
				<button type="submit"> Submit Info</button>
			</form>
		</div>
	);
}

export default NameInput;
