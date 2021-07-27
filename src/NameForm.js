import styled from "./nameForm.module.css";
import NameInput from "./NameInput/NameInput";
import NameList from "./NameList/NameList";
import React from "react";

function NameForm(props) {
	const userObj = (obj) => {
		props.finalInput(obj);
	};
	return (
		<div>
			<NameInput userInfo={userObj}></NameInput>
			{/* <NameList></NameList> */}
		</div>
	);
}

export default NameForm;
