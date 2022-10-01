function Button(props) {
	return (
		<button
			kind={props.kind}
			type={props.type}
			onClick={props.onClick}
			className={"btn " + ((props.kind === 'secondary') ? 'btn--secondary' : 'btn--primary') + ((props.isFull === true) ? ' btn--full' : '')}
		>
			{props.label}
		</button>
	)
}

export default Button