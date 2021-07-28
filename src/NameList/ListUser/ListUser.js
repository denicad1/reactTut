import styled from "./listUser.module.css";

function ListUser(props) {
	return (
		<li className={styled.record}>
			<p>{props.name}</p>

			<p>{props.age}</p>
		</li>
	);
}

export default ListUser;
