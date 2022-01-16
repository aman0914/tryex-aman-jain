import axios from 'axios';
import {
	BASE_URL,
	CHART_DATA_FUNCTION,
	FOREX_FUNCTION
} from '../config/urlConfig';
import localforage from 'localforage';
import { setupCache } from 'axios-cache-adapter';

//Using Cache -- Alpha Vantage allows only 5 requests per minute and 500 in a day
const cache = setupCache({
	maxAge: 60 * 60 * 1000,
	store: localforage,
	exclude: {
		query: false
	}
});

const axiosInstance = axios.create({
	baseURL: BASE_URL,
	adapter: cache.adapter
});

export const getChartData = props => {
	return axiosInstance.get('', {
		params: {
			function: CHART_DATA_FUNCTION,
			from_symbol: props.from_symbol,
			to_symbol: props.to_symbol,
			apikey: process.env.REACT_APP_API_KEY
		}
	});
};

export const getExchangeRate = props => {
	return axiosInstance.get('', {
		params: {
			function: FOREX_FUNCTION,
			from_currency: props.from_currency,
			to_currency: props.to_currency,
			apikey: process.env.REACT_APP_API_KEY
		}
	});
};
