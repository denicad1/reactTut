import ListUser from "./ListUser/ListUser";
import styled from "./nameList.module.css";

function NameList(props) {
	if (props.users.length === 0) {
		return <p className={`${styled.list}`}>No entries yes</p>;
	} else {
		return (
			<ul className={`${styled.list}`}>
				{props.users.map((user) => {
					return (
						<ListUser key={user.id} age={user.age} name={user.name}></ListUser>
					);
				})}
			</ul>
		);
	}
}
export default NameList;
