const Button = props => {
	const {
		text = 'Button',
		type = 'primary',
	} = props;
	const classList = `btn btn-${type}`;

	return (
		<button className={classList} onClick={props.onClick}>
			{text}
		</button>
	);
};

export default Button;
