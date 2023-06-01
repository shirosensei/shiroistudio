import styled from 'styled-components';


export const Header = styled.header`
display: flex;
justify-content: space-between;
flex-direction: row;
background-color: #ffff;
border-bottom: 1px solid #e5e5e5;

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
transition: height 0.3s ease-in-out;




  /* Mobile styles */
  @media screen and (max-width: 767px) {
    /* Mobile menu styles */
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: relative;
    background-color: #333333;
    // top: 95px;
    // left: 595px;
    padding: 2rem;
    // width: 100px;
    height: 150px;
    overflow: hidden;
    transition: height 0.3s ease-in-out;
 }

 &.open {
    height: 200px;
  }

`;

export const ToggleButton = styled.button`
  /* Toggle button styles */

    position: relative;
    width: 60px;
    height: 50px;
    background: tomato;
    border: 1px solid #000;
    cursor: pointer;
  /* Mobile styles */
  @media (min-width: 768px) {
    display: none; /* Hide toggle button on desktop screens */
  }
`;

export const Line = styled.span`
/* Line styles */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: none;
transition: transform 0.3s ease-in-out;

&::before,
&::after {
  content: '';
  height: 2px;
  width: 50px;
  background-color: #fff;
  transition: transform 0.3s ease-in-out;
}

&::before {
    position: absolute;
    width: 45px;
    transform: translateY(-8px) rotate(${props => (props.isOpen ? '40deg' : '0')});
  }

  &::after {
    position: absolute;
    top: 13px;
    width: 45px;
    transform: translateY(8px) rotate(${props => (props.isOpen ? '-55deg' : '0')});
  }

  
`

export const NavItem = styled.a`
display: flex;
align-items: center;
flex-direction: row;
text-decoration: none;
color: #4fb3rr;
font-size: 18px;

&:hover {
    color: #0077CC;
    filter: brightness(2);
  }

  &:active {
    background-color: #f5f5dc;
    filter: brightness(1);
  }

  @media (max-width: 767px) {
    /* Styles for mobile */
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    transition: height 0.5s ease-in-out;
  }
  

`
