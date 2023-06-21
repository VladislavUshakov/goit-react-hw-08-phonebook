import { Title } from 'components/SharedLayout';
import { UserMenu } from 'components/UserMenu';
import { Container } from './Header.styles';
import { Navigation } from 'components/Navigation';

export const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <UserMenu />
    <Navigation />
  </Container>
);
