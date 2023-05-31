import styled from 'styled-components';


export const Header = styled.header`
display: flex;
justify-content: space-between;
flex-direction: row;
height: 50px;
width: 100%;
background-color: #ffff;
border-bottom: 1px solid #e5e5e5;
padding: 12px;
`;

export const Logo = styled.h1`
font-size: 1.6rem;
font-weight: 800;
color: #4a4a4a;
background-color: #ffff;
`;

export const NavbarContainer = styled.nav`
display: flex;
flex-direction: row;
align-items: center;
gap: 2rem;
padding: 0.5rem;
`;

export const NavItem = styled.a`
display: flex;
align-items: center;
flex-direction: row;
text-decoration: none;
color: #4fb3rr;
font-size: 18px;

`
