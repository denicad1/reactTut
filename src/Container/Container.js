import styled from "./container.module.css";

function Container(props) {
	return <div className={`${styled.contain}`}>{props.children}</div>;
}
export default Container;
