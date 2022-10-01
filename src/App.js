import { useState } from "react"
import "./App.css"

import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense"
import Button from "./components/Primitives/Button"

const DUMMY_EXPENSES = [
	{
		id: "el1",
		title: "Car insurance",
		amount: 294.58,
		date: new Date(2022, 7, 16),
	},
	{
		id: "el2",
		title: "Nike store",
		amount: 125.99,
		date: new Date(2022, 7, 16),
	},
	{
		id: "el3",
		title: "Utilities",
		amount: 130.01,
		date: new Date(2022, 6, 12),
	},
	{
		id: "el4",
		title: "New tires",
		amount: 990.95,
		date: new Date(2022, 6, 12),
	},
	{
		id: "el5",
		title: "Shake-shack",
		amount: 20.91,
		date: new Date(2022, 2, 30),
	},
	{
		id: "el5",
		title: "Food",
		amount: 100.13,
		date: new Date(2021, 3, 5),
	},
	{
		id: "el6",
		title: "Soap",
		amount: 12.51,
		date: new Date(2020, 4, 15),
	},
	{
		id: "el7",
		title: "Gym",
		amount: 12.55,
		date: new Date(2020, 3, 3),
	},
	{
		id: "el8",
		title: "Gym",
		amount: 12.55,
		date: new Date(2020, 2, 3),
	},
	{
		id: "el9",
		title: "Gym",
		amount: 12.55,
		date: new Date(2020, 1, 1),
	},
]

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

	function addExpenseHandler(expense) {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses]
		})
		setIsEditing(false)
	}

	const [isEditing, setIsEditing] = useState(false)

	function startEditingHandler() {
		setIsEditing(true)
	}

	function stopEditingHandler() {
		setIsEditing(false)
	}

	return (
		<div className='flex flex-col max-w-2xl min-h-screen px-2 py-4 m-auto'>
			<div className='flex justify-between lg:mt-10'>
				<h1 className='block text-3xl font-bold mb-4'>Expenses</h1>
				<Button
					kind='primary'
					label='Add expense'
					onClick={startEditingHandler}
				/>
			</div>
			{isEditing && (
				<NewExpense
					onAddExpense={addExpenseHandler}
					onCancel={stopEditingHandler}
				/>
			)}
			<article className='flex-1'>
				<Expenses items={expenses} />
			</article>
			<footer className='flex justify-between'>
				<a
					className='text-sm text-stone-500 underline underline-offset-2 hover:no-underline'
					href='https://github.com/igorlanko/expenses-react'
				>
					View on Github
				</a>
				<p className="text-sm text-stone-500">
					<a
						className='underline underline-offset-2 hover:no-underline'
						href='https://igorlanko.com'
						target='_blank'
						rel="noreferrer"
					>
						Igor Lanko
					</a>
					&nbsp;in Sep, 2022.
				</p>
			</footer>
		</div>
	)
}

export default App
