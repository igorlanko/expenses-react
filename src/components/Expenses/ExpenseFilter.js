import Chart from "../Chart/Chart"

function ExpenseFilter(props) {
	function filterChangeHandler(event) {
		props.onChangeFilter(event.target.value)
	}

	return (
		<div>
			<div className='border-t'></div>
			<div className='flex mb-4'>
				<h2 className='flex flex-1 text-xl font-bold'>
					By year
				</h2>
				<select
					className='flex flex-1 md:flex-grow-0 md:min-w-[180px] h-8 border rounded-md px-1 pb-1 mt-1'
					value={props.selected}
					onChange={filterChangeHandler}
				>
					<option value='2019'>2019</option>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
				</select>
			</div>
		</div>
	)
}

export default ExpenseFilter
