import {
	CurrencyDollarIcon,
	CurrencyBangladeshiIcon,
	CurrencyRupeeIcon,
	CurrencyPoundIcon,
	CurrencyEuroIcon,
	CurrencyYenIcon
} from '@heroicons/react/solid';

export const dropdownOptions = [
	{
		id: 'dollar',
		label: 'United States Dollar',
		value: 'USD',
		icon: props => <CurrencyDollarIcon style={{ ...props }} />,
		symbol: '$'
	},
	{
		id: 'euro',
		label: 'Euro',
		value: 'EUR',
		icon: props => <CurrencyEuroIcon style={{ ...props }} />,
		symbol: '€'
	},
	{
		id: 'bangladeshi-taka',
		label: 'Bangladeshi Taka',
		value: 'BDT',
		icon: props => <CurrencyBangladeshiIcon style={{ ...props }} />,
		symbol: '৳'
	},
	{
		id: 'indian-rupee',
		label: 'Indian Rupee',
		value: 'INR',
		icon: props => <CurrencyRupeeIcon style={{ ...props }} />,
		symbol: '₹'
	},
	{
		id: 'pound',
		label: 'British Pound Sterling',
		value: 'GBP',
		icon: props => <CurrencyPoundIcon style={{ ...props }} />,
		symbol: '£'
	},
	{
		id: 'yen',
		label: 'Japanese Yen',
		value: 'JPY',
		icon: props => <CurrencyYenIcon style={{ ...props }} />,
		symbol: '¥'
	}
];
