// theme.js
const theme = {
    colors: {
      text: '#FFFFFF',
      gunmetal: '#2A3439',
      accent: '#FF6F61',
      accentHover: '#573232',
      onyx: '#646667',
      spacecadet: 'rgb(2 13 39 / 96%)',
      focus: '#FFD700',
      gold: '#FF9900',
      background: '#080808',
      primary: "#336699",
    secondary: "#993366",
    },
    spacing: {
      small: 'clamp(0.5rem, calc(1vw + 0.25rem), 1rem)',
      medium: 'clamp(1rem, calc(2vw + 0.5rem), 2rem)',
      large: 'clamp(1.5rem, calc(3vw + 0.75rem), 3rem)',
      larger: 'clamp(5rem, calc(3vw + 0.75rem), 3rem)',
    },
    fontSizes: {
      small: 'clamp(0.875rem, 0.8rem + 0.5vw, 1rem)', // ~14px to ~16px
    medium: 'clamp(1.125rem, 1rem + 0.8vw, 1.5rem)', // ~18px to ~24px
    large: 'clamp(1.5rem, 1.4rem + 1.2vw, 2.25rem)', // ~24px to ~36px
    xl: 'clamp(2rem, 1.8rem + 1.5vw, 3rem)'
    },
    fonts: {
      body: '"Open Sans", sans-serif',
    heading: '"Raleway", Helvetica, serif',
    }
  };
  
  export default theme;
  