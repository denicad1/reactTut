import styled from "./inputFields.module.css";
// import { useState } from "react";

function InputFields(props) {
	const userAge = (e) => {
		if (e.target.value > 0) {
			props.infoAge(e.target.value);
		}
	};
	const userName = (e) => {
		let name = e.target;
		if (name.value.trim().length === 0) {
			return;
		}

		props.infoName(name.value);
	};
	return (
		<div className={`${styled.fields__order} ${props.className} `}>
			<label>Age (Years)</label>
			<input
				type="number"
				min="1"
				max="99"
				step="1"
				onChange={userAge}
				value={props.age}
			></input>

			<label>Name</label>
			<input
				type="text"
				placeholder="Name"
				onChange={userName}
				value={props.name}
			></input>
		</div>
	);
}

export default InputFields;
