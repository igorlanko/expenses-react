import React, { useState } from "react"

import Card from "../Primitives/Card"
import ExpenseDate from "./ExpenseDate"

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title)

	const clickHandler = () => {
		setTitle("Updated")
		console.log(title)
	}

	return (
		<li className="grid grid-cols-4 mb-0.5">
			<ExpenseDate
				date={props.date}
				title={props.title}
				amount={props.amount}
			/>
			<Card>
				{/* <button
					className="flex relative pl-2 pr-8 py-0.5 rounded-md bg-stone-200 hover:bg-stone-300 active:top-px"
					onClick={clickHandler}
				>
					Change title
				</button> */}
				<h2 className="flex-1">{props.title}</h2>
				<span className="expense-item__price text-left font-mono">
					{props.amount}
				</span>
			</Card>
		</li>
	)
}

export default ExpenseItem
