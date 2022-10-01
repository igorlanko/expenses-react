import { useState } from "react"

import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpensesChart"

function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState("2022")

	function filterChangeHandler(selectedYear) {
		setFilteredYear(selectedYear)
	}

	// show items in the list based on the selected year
	const filteredExpenses = props.items.filter((expense) => {
		// get the date and transform to the date format
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<ExpenseFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpenseChart expenses={filteredExpenses} />
			<div className='border-t'></div>
			<h2 className='text-xl font-bold mb-4'>Recent</h2>
			<div className='grid grid-cols-4 mb-1'>
				<div className='col-span-1'>
					<span className='text-sm'>Date</span>
				</div>
				<div className='col-span-1 pl-2'>
					<span className='text-sm'>Name</span>
				</div>
				<div className='col-span-2 text-right pr-2'>
					<span className='text-sm'>
						Amount, <span className='font-mono'>$</span>
					</span>
				</div>
			</div>
			<ExpenseList items={filteredExpenses} />
		</div>
	)
}

export default Expenses
