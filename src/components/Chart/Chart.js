import ChartBar from "./ChartBar"

function Chart(props) {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value)
	const totalMaximum = Math.max(...dataPointValues)

	return (
		<div className='flex justify-between mb-8'>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMaximum}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
