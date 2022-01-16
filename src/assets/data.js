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
		label: 'USD',
		value: 'USD',
		icon: props => <CurrencyDollarIcon style={{ ...props }} />,
		symbol: '$'
	},
	{
		id: 'euro',
		label: 'EUR',
		value: 'EUR',
		icon: props => <CurrencyEuroIcon style={{ ...props }} />,
		symbol: '€'
	},
	{
		id: 'bangladeshi-taka',
		label: 'BDT',
		value: 'BDT',
		icon: props => <CurrencyBangladeshiIcon style={{ ...props }} />,
		symbol: '৳'
	},
	{
		id: 'indian-rupee',
		label: 'INR',
		value: 'INR',
		icon: props => <CurrencyRupeeIcon style={{ ...props }} />,
		symbol: '₹'
	},
	{
		id: 'pound',
		label: 'GBP',
		value: 'GBP',
		icon: props => <CurrencyPoundIcon style={{ ...props }} />,
		symbol: '£'
	},
	{
		id: 'yen',
		label: 'JPY',
		value: 'JPY',
		icon: props => <CurrencyYenIcon style={{ ...props }} />,
		symbol: '¥'
	}
];
