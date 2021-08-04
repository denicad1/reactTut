import styled from "./nameForm.module.css";
import NameInput from "./NameInput/NameInput";
import NameList from "./NameList/NameList";
import Container from "./Container/Container";
import React from "react";
import Modal from "./Modal";
import { useState } from "react";

function NameForm(props) {
	const [modal, setModal] = useState(false);
	const userObj = (obj) => {
		props.finalInput(obj);
	};
	const modalHandler = () => {
		if (modal) {
			setModal(false);
		} else {
			setModal(true);
		}
	};

	return (
		<div onClick={modalHandler}>
			{modal && <Modal></Modal>}
			<Container>
				<NameInput userInfo={userObj}></NameInput>
				<NameList users={props.userList}></NameList>
			</Container>
		</div>
	);
}

export default NameForm;
