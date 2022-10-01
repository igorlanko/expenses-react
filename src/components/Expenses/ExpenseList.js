import ExpenseItem from "./ExpenseItem"

function ExpenseList(props) {
	if (props.items.length === 0) {
		return <h2>No expenses yet.</h2>
	}

	return (
		<ul>
			{props.items.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			))}
		</ul>
	)
}

export default ExpenseList
