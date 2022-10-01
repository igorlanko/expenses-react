function Card(props) {
	// const classes = 'card' + props.className // if need to extend 'card' class with more in DOM

	return (
		<div className="card col-span-3 flex px-2 pt-1 pb-4 rounded-md bg-white border-solid border border-neutral-200">
			{props.children}
		</div>
	)
}

export default Card
