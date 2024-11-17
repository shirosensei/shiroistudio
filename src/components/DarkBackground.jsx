import { createGlobalStyle } from 'styled-components';

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

    --space-cadet: #192A51;
    --beige: #f5f5dc;
    --gunmetal: #222831;
    --onyx: #393E46;
    --anti-flash-white: #EEEEEE;
    --mustard: #FFD369;

     
      /* Dark and Dramatic */

      --black: #000000;
      --navy: #000080;
      --dark-gray: #333333;

  /* Global styles */
  
  body {
    background-color: var(--space-cadet);
    color: var(--accent-color);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    border-box: box-sizing;
  }

  @media only screen and (min-width: 320px) and (max-width: 498px) {
      font-size: 11.35px; /* 18px divided by 16px (base font size) */
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
