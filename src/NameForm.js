import styled from "./nameForm.module.css";
import NameInput from "./NameInput/NameInput";
import NameList from "./NameList/NameList";
import Container from "./Container/Container";
import React from "react";

function NameForm(props) {
	const userObj = (obj) => {
		props.finalInput(obj);
	};
	return (
		<div>
			<Container>
				<NameInput userInfo={userObj}></NameInput>
				<NameList users={props.userList}></NameList>
			</Container>
		</div>
	);
}

export default NameForm;
