import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/tryex.svg';
import {
	HomeIcon,
	ChartSquareBarIcon,
	BriefcaseIcon,
	SwitchHorizontalIcon,
	CurrencyDollarIcon,
	UserIcon,
	CogIcon
} from '@heroicons/react/solid';
import { useHistory } from 'react-router-dom';

const iconStyles = {
	width: '1.25rem',
	height: '1.25rem',
	marginRight: '0.75rem',
	marginLeft: '1.5rem'
};
const Sidebar = () => {
	const history = useHistory();
	return (
		<Container>
			<LogoDiv onClick={() => history.push('/')}>
				<Logo />
			</LogoDiv>
			<Chip active={true} onClick={() => history.push('/')}>
				<HomeIcon style={iconStyles} /> Dashboard
			</Chip>
			<Chip>
				<ChartSquareBarIcon style={iconStyles} /> Trading
			</Chip>
			<Chip>
				<BriefcaseIcon style={iconStyles} /> Wallet
			</Chip>
			<Chip>
				<SwitchHorizontalIcon style={iconStyles} /> Exchange
			</Chip>
			<Chip>
				<CurrencyDollarIcon style={iconStyles} /> Buy & Sell
			</Chip>
			<Chip>
				<UserIcon style={iconStyles} /> Profile
			</Chip>
			<Chip>
				<CogIcon style={iconStyles} /> Settings
			</Chip>
		</Container>
	);
};

export default Sidebar;

const Container = styled.div`
	height: 100vh;
	width: 15rem;
	background-color: #fff;
`;

const Chip = styled.div`
	background: ${props =>
		props.active
			? 'linear-gradient(101.43deg, #7166d2 -2.83%, #534aba 73.19%)'
			: '#fff'};
	border-radius: 20px;
	margin: 20px;
	font-family: 'Poppins', sans-serif;
	color: ${props => (props.active ? '#fff' : '#ABA7D9')};
	font-size: 15px;
	line-height: 1.5rem;
	font-weight: 600;
	display: flex;
	justify-content: start;
	height: 60px;
	width: 180px;
	align-items: center;
	cursor: pointer;
	&:hover {
		background: ${props =>
			props.active
				? ''
				: 'linear-gradient(101.43deg, #7166d2 -2.83%, #534aba 73.19%)'};
		opacity: ${props => (props.active ? '' : '0.4')};
		color: ${props => (props.active ? '' : '#fff')};
	}
`;

const LogoDiv = styled.div`
	margin: 20px 20px;
	margin-bottom: 50px;
`;
