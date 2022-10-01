function ExpenseDate(props) {
	const month = props.date.toLocaleString("en-US", { month: "short" })
	const day = props.date.toLocaleString("en-US", { day: "2-digit" })
	const year = props.date.getFullYear()

	return (
		<div className="mt-1 col-span-1">
			<span className="text-sm flex-1">
				{month} {day}, {year}
			</span>
		</div>
	)
}

export default ExpenseDate
