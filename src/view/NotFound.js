import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';

const NotFound = () => {
	return (
		<Container id='home-page-container'>
			<Sidebar />
			<ErrorContainer>
				<GIFContainer
					style={{
						backgroundImage: 'url(http://i.giphy.com/l117HrgEinjIA.gif)'
					}}
				></GIFContainer>
				<h1 style={{ font: '24px Poppins' }}>404 Not Found</h1>
				<em>Please click on Dashboard</em>
			</ErrorContainer>
		</Container>
	);
};

export default NotFound;

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const ErrorContainer = styled.div`
	width: 100%;
	height: 90vh;
	background-size: cover;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const GIFContainer = styled.div`
	width: 350px;
	height: 400px;
	background-size: contain;
	margin: 0 auto;
	border-radius: 20px;
`;
