import styled from '@emotion/styled';

export const Nav = styled.nav`
  display: flex;
  gap: 15px;
  width: 100%;

  & a {
    color: black;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 5px 10px;
    border: 1px solid black;
    border-radius: 5px;
    transition: background-color 200ms linear, border-color 200ms linear;

    &.active {
      border-color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.accent};
    }

    &:hover,
    &:focus {
      border-color: ${({ theme }) => theme.colors.accent};
      background-color: ${({ theme }) => theme.colors.accent};
    }
  }
`;
