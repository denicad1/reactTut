import styles from "./modal.module.css";
function Modal(props) {
	return (
		<div className={`${styles.background}`}>
			<div className={`${styles.modal}`}>
				<p>hello</p>
			</div>
		</div>
	);
}
export default Modal;
