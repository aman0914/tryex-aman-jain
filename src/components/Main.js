import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getChartData, getExchangeRate } from '../api/apiConnector';
import Chart from './Chart';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import { dropdownOptions } from '../assets/data';
import CustomSelect from './CustomSelect';
import Loader from '../components/Loader';

const Main = () => {
	const [loading, setLoading] = useState(false);
	const [chartData, setChartData] = useState([]);
	const [forexRate, setForexRate] = useState(0);
	const [fromCurr, setFromCurr] = useState(dropdownOptions[0]);
	const [toCurr, setToCurr] = useState(dropdownOptions[1]);
	const [fromCurrValue, setFromCurrValue] = useState(1.0);
	const [toCurrValue, setToCurrValue] = useState(1.0);

	useEffect(() => {
		//Call API to fetch Chart Data and Exchange Rates
		const getApi = async (from, to) => {
			setLoading(true);
			const resultChart = await getChartData({
				from_symbol: from,
				to_symbol: to
			});
			const resultforex = await getExchangeRate({
				from_currency: from,
				to_currency: to
			});
			setChartData(formatChartData(resultChart.data['Time Series FX (Daily)']));
			setForexRate(
				Number(
					resultforex.data['Realtime Currency Exchange Rate'][
						'5. Exchange Rate'
					]
				)
			);
			setFromCurrValue(1.0);
			setLoading(false);
		};
		try {
			getApi(fromCurr.value, toCurr.value);
		} catch (e) {
			console.error(e);
		}
	}, [fromCurr, toCurr]);

	useEffect(() => {
		setToCurrValue((fromCurrValue * forexRate).toFixed(2));
	}, [fromCurrValue, forexRate]);

	if (loading) {
		return (
			<LoadingContainer>
				<Loader />
			</LoadingContainer>
		);
	}

	return (
		<Container>
			<Chart chartData={chartData} />
			<ConverterContainer>
				<div style={{ width: '200px' }}>
					<CustomSelect
						type={'From'}
						value={fromCurr}
						options={dropdownOptions}
						onChange={val => setFromCurr(val)}
					/>
					<div style={{ display: 'flex', marginLeft: '15px' }}>
						<CurrencySymbol value={fromCurr.symbol} onChange={() => null} />
						<CustomInput
							value={fromCurrValue}
							onChange={e => {
								if (
									e.target.value.match(/^([0-9]+\.?[0-9]*|\.[0-9]+)$/) ||
									!e.target.value
								)
									setFromCurrValue(e.target.value);
							}}
						/>
					</div>
				</div>
				<ArrowCircleRightIcon
					style={{
						width: '60px',
						height: '60px',
						color: '#7166d2',
						margin: '0px 50px 0px 40px'
					}}
				/>
				<div style={{ width: '200px' }}>
					<CustomSelect
						type={'To'}
						value={toCurr}
						options={dropdownOptions}
						onChange={val => setToCurr(val)}
					/>
					<div style={{ display: 'flex', marginLeft: '15px' }}>
						<CurrencySymbol value={toCurr.symbol} onChange={() => null} />
						<CustomInput value={toCurrValue} onChange={e => null} />
					</div>
				</div>
			</ConverterContainer>
		</Container>
	);
};

export default Main;

const Container = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	// justify-content: space-evenly;
`;
const LoadingContainer = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ConverterContainer = styled.div`
	align-self: center;
	display: flex;
	align-items: center;
	margin: 20px 20px;
	background-color: #fff;
	border-radius: 20px;
	padding: 20px;
	margin-top: 0px;
	margin-bottom: 40px;
`;

const CustomInput = styled.input`
	border: none;
	outline: none;
	font: 600 36px/54px 'Poppins', sans-serif;
	background-color: unset;
	width: 160px;
`;

const CurrencySymbol = styled.input`
	border: none;
	outline: none;
	font: 600 36px/54px 'Poppins', sans-serif;
	background-color: unset;
	width: 30px;
`;

const formatChartData = data => {
	return Object.entries(data).map(entries => {
		const [date, rateData] = entries;
		return {
			date,
			open: rateData['1. open'],
			high: rateData['2. high'],
			low: rateData['3. low'],
			close: rateData['4. close']
		};
	});
};
