import { Title } from 'components/SharedLayout';
import { UserMenu } from 'components/UserMenu';
import { Container } from './Header.styles';

export const Header = ({ title }) => (
  <Container>
    <Title>{title}</Title>
    <UserMenu />
  </Container>
);
