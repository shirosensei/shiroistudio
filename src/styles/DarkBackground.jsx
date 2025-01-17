import { createGlobalStyle } from "styled-components";

// Dark Theme Global Styles
export const DarkBackground = createGlobalStyle`
:root {
  --primary-color: #336699;
  --secondary-color: #993366;
  --accent-color: #FF9900;
  --background-color: #222222;
  --text-color: #FFFFFF;
  --heading-color: #333333;
  --link-color: #0077CC;

  --space-cadet:rgb(16, 27, 53);
  --beige: #f5f5dc;
  --gunmetal: #222831;
  --onyx: #393E46;
  --anti-flash-white: #EEEEEE;
  --mustard: #FFD369;

  --black: #000000;
  --dark-gray: #333333;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family:${({ theme }) => theme.fonts.body};
  font-size: 1rem;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.6;
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.1rem;
  }

p {
  margin: 0 0 ${({theme }) => theme.spacing.medium} 0;
  }

*, *::before, *::after {
  box-sizing: inherit;
}

@media only screen and (max-width: 498px) {
  html {
    font-size: ${({theme}) => theme.fontSizes.small}; 
    min-width: 320px
  }
}
`;

// Light Theme Global Styles
export const LightBackground = createGlobalStyle`
:root {
  --background-color: #FFFFFF;
  --text-color: #000000;
  --link-color: #0077CC;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}
`;
