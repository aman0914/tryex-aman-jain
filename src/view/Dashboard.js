import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Main from '../components/Main';
import { ReactComponent as FooterBanner } from '../assets/footer.svg';

const Dashboard = () => {
	return (
		<Container>
			<Sidebar />
			<CenterContainer>
				<Header />
				<Main />
				<FooterContainer>
					<FooterBanner style={{ width: 'auto', maxHeight: '300px' }} />
				</FooterContainer>
			</CenterContainer>
		</Container>
	);
};

export default Dashboard;

const Container = styled.div`
	display: flex;
	background-color: #fafafe;
	height: 100%;
`;

const CenterContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const FooterContainer = styled.div`
	display: none;
	margin: 0 auto;
	@media only screen and (min-width: 1320px) {
		display: flex;
	}
`;
