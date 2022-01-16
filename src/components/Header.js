import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';
import styled from 'styled-components';
import {
	BellIcon,
	ChevronDownIcon,
	MailIcon,
	UserCircleIcon
} from '@heroicons/react/outline';

const iconStyles = {
	width: '1.25rem',
	height: '1.25rem',
	margin: '0px 5px',
	color: '#4E4E4E'
};

const Header = () => {
	return (
		<Container>
			<PageTitle>Dashboard</PageTitle>
			<SearchBar>
				<input placeholder='Search Anything' />
				<SearchIconSpan>
					<SearchIcon style={{ width: '20px', height: '20px' }} />
				</SearchIconSpan>
			</SearchBar>
			<Actions>
				<MailIcon style={iconStyles} /> <BellIcon style={iconStyles} />
				<UserCircleIcon style={iconStyles} /> <div>Lorem Ipsum</div>
				<ChevronDownIcon style={iconStyles} />
			</Actions>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const PageTitle = styled.div`
	font-size: 2rem;
	color: black;
	font-family: 'Poppins', sans-serif;
	font-weight: 600;
	margin: 10px 25px;
`;

const SearchBar = styled.div`
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
	margin: 10px 25px;
	input {
		width: 400px;
		height: 40px;
		outline: none;
		border: none;
		border-radius: 10px;
		padding-left: 40px;
		color: #5a5881;
		font: 1rem 'Poppins';
	}
`;
const SearchIconSpan = styled.span`
	position: absolute;
	left: 10px;
	top: 10px;
	color: #5a5881;
`;

const Actions = styled.div`
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	margin: 10px 25px;
	&:hover {
		cursor: pointer;
	}
`;
