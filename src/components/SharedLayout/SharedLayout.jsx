import { Outlet } from 'react-router-dom';
import { Section } from './SharedLayout.styles';
import { Header } from 'components/Header';

export const SharedLayout = ({ title }) => (
  <Section>
    <Header title={title} />
    <Outlet />
  </Section>
);
