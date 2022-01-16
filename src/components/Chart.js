import React from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import styled from 'styled-components';

const Chart = ({ chartData }) => {
	if (chartData.length === 0) {
		return <></>;
	}

	return (
		<Container>
			<Title>Overview</Title>
			<CanvasJSChart
				options={{
					theme: 'light2',
					animationEnabled: true,
					axisY: {
						// Minimum value is 10% less than the lowest price in the dataset
						minimum: Math.min(...chartData.map(data => data.close)) / 1.1,
						// Minimum value is 10% more than the highest price in the dataset
						maximum: Math.max(...chartData.map(data => data.close)) * 1.1,
						crosshair: {
							enabled: true,
							snapToDataPoint: true
						}
					},
					axisX: {
						crosshair: {
							enabled: true,
							snapToDataPoint: true
						},
						scaleBreaks: {
							spacing: 0,
							fillOpacity: 0,
							lineThickness: 0,
							customBreaks: chartData.reduce((breaks, value, index, array) => {
								// Just return on the first iteration
								// Since there is no previous data point
								if (index === 0) return breaks;

								// Time in UNIX for current and previous data points
								const currentDataPointUnix = Number(new Date(value.date));
								const previousDataPointUnix = Number(
									new Date(array[index - 1].date)
								);

								// One day converted to milliseconds
								const oneDayInMs = 86400000;

								// Difference between the current and previous data points
								// In milliseconds
								const difference = previousDataPointUnix - currentDataPointUnix;

								return difference === oneDayInMs
									? // Difference is 1 day, no scale break is needed
									  breaks
									: // Difference is more than 1 day, need to create
									  // A new scale break
									  [
											...breaks,
											{
												startValue: currentDataPointUnix,
												endValue: previousDataPointUnix - oneDayInMs
											}
									  ];
							}, [])
						}
					},
					data: [
						{
							type: 'area',
							dataPoints: chartData.map(o => ({
								x: new Date(o.date),
								y: Number(o.close)
							}))
						}
					]
				}}
			/>
		</Container>
	);
};

export default Chart;

const Container = styled.div`
	margin: 40px;
	canvas {
		border-radius: 20px;
	}
`;

const Title = styled.div`
	font: 20px 'Poppins';
	font-weight: 600;
	margin: 10px;
`;
