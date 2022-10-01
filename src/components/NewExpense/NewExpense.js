import Button from "../Primitives/Button"
import Form from "./NewExpenseForm"

function NewExpense(props) {
	function saveExpenseDataHandler(enteredExpenseData) {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData)
	}

	return (
		<div className='fixed inset-0 flex justify-center items-end sm:items-center z-10'>
			<div className='flex flex-col sm:max-w-[420px] bg-stone-50 p-2 rounded-md z-10'>
				<div className='flex justify-between mb-12 sm:mb-4'>
					<h2 className='text-xl font-bold'>New expense</h2>
					<button onClick={props.onCancel}>Close</button>
				</div>
				<Form
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={props.onCancel}
				/>
			</div>
			<div
				onClick={props.onCancel}
				className='absolute inset-0 bg-stone-900 opacity-80'
			></div>
		</div>
	)
}

export default NewExpense
