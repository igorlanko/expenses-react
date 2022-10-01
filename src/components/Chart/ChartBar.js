function ChartBar(props) {
	let barFillHeight = "0%" // tailwind height class

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100)
	}

	return (
		<div className='flex monthFilter'>
			<div>
				<div className='monthFilter__track relative h-20 w-4 sm:w-6 md:w-8 lg:w-10 bg-stone-200 rounded md:rounded-md before:absolute before:inset-0 before:border before:border-stone-300 before:rounded before:md:rounded-md'>
					<div
						className='monthFilter__fill absolute bottom-0 inset-x-0 bg-blue-500 rounded'
						style={{ height: barFillHeight + "%" }}
					></div>
				</div>
				<span className='monthFilter__label text-xs'>
					{props.label}
				</span>
			</div>
		</div>
	)
}

export default ChartBar
