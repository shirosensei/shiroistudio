import styled, { createGlobalStyle } from 'styled-components';

// Create a global style component
export const DarkBackground = createGlobalStyle`

:root {
  /* Colors */
  --primary-color: #336699;
  --secondary-color: #993366;
  --accent-color: #FF9900;
  --background-color: #222222;
  --text-color: #FFFFFF;
  --heading-color: #333333;
  --link-color: #0077CC;

  /* ... add more colors as needed */

    --light-gray: #f8f8f8;
  --white: #ffffff;

   /* Professional and Corporate: */

    --blue-gray: #607d8b;
    --beige: #f5f5dc;

    /* Bold and Vibrant */

    --red: #ff0000;
    --orange: #ff9900;
    --purple: #800080;

      /* Serene and Calming: */

      --pastel-blue: #a6c8e0;
      --light-green: #a2d9ce;
     
      /* Dark and Dramatic */

      --black: #000000;
      --navy: #000080;
      --dark-gray: #333333;

  /* Global styles */
  body {
    background-color: var(--blue-gray);
    color: var(--text-color);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

}
`;


export const LightBackground = createGlobalStyle`
    html {
        background-color: #fff; /* Set your desired dark background color */

    }
    
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    
    `;

    const theme = {
      colors: {
        primary: '#ff0000',
        secondary: '#ff9900',
        tertiary: '#800080',
        quaternary: '#a6c8e0',
        quinary: '#a2d9ce',
        senary: '#333333',
        dark: '#000',
        light: '#fff',
        gray: '#f0f0f0',
        pastel: '#a6c8e0',
        lightGreen: '#a2d9ce',
        black: '#000000',
        navy: '#000080',
        darkGray: '#333333',
        },
    }
    

    export const QuaternaryTheme = styled.div`
background: ${props => props.theme.colors.quaternary};
`