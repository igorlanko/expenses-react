import { useState } from "react"
import Button from "../Primitives/Button"

function Form(props) {
	const [enteredTitle, setEnteredTitle] = useState("")
	const [enteredAmount, setEnteredAmount] = useState("")
	const [enteredDate, setEnteredDate] = useState("")

	function titleChangeHandler(event) {
		setEnteredTitle(event.target.value)
	}

	function amountChangeHandler(event) {
		setEnteredAmount(event.target.value)
	}

	function dateChangeHandler(event) {
		setEnteredDate(event.target.value)
	}

	function submitHandler(event) {
		event.preventDefault()

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate)
		}

		props.onSaveExpenseData(expenseData)
		setEnteredTitle('')
		setEnteredAmount('')
		setEnteredDate('')
	}

	return (
		<form
			className="flex h-full md:h-auto flex-col"
			onSubmit={submitHandler}
		>
			<fieldset className="h-full md:h-auto flex flex-col justify-end gap-y-1">
				<div className="grid grid-cols-8">
					<label className="col-span-2">Name</label>
					<input
						className="col-span-6 h-8 border rounded-md px-1 pb-1"
						placeholder="New sweet sneakers..."
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="grid grid-cols-8">
					<label className="col-span-2">Amount</label>
					<div className="col-span-2 relative before:absolute before:content-['$'] before:-left-3 font-mono">
						<input
							className="w-full h-8 relative border rounded-md px-1 pb-1 font-mono"
							placeholder="42"
							type="number"
							min="0.01"
							step="0.01"
							value={enteredAmount}
							onChange={amountChangeHandler}
						/>
					</div>
				</div>
				<div className="grid grid-cols-8">
					<label className="col-span-2">Date</label>
					<input
						className="col-span-4 h-8 border rounded-md px-1 pb-1"
						placeholder="Text"
						type="date"
						min="2019-01-01"
						max="2022-09-26"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</fieldset>
			<div className="grid grid-cols-8 mt-1">
				<div className="col-span-8 flex gap-x-1 mt-4">
					<Button
						isFull={true}
						label="Add expense"
						onClick={props.onSubmit}
						type="submit"
						className="flex-1"
					/>
					<Button
						kind="secondary"
						label="Cancel"
						onClick={props.onCancel}
					/>
				</div>
			</div>
		</form>
	)
}

export default Form
