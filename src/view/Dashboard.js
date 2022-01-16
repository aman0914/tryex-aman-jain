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
					<FooterBanner />
				</FooterContainer>
			</CenterContainer>
		</Container>
	);
};

export default Dashboard;

const Container = styled.div`
	display: flex;
	background-color: #fafafe;
`;

const CenterContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const FooterContainer = styled.div`
	margin: 0 auto;
`;
