import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* CSS Reset and Normalize */
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  html {
    /* Improve font rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Enable smooth scrolling */
    scroll-behavior: smooth;
    
    /* Improve text rendering on high DPI displays */
    text-rendering: optimizeLegibility;
    
    /* Set base font size for rem calculations */
    font-size: 16px;
    
    /* Set tab size */
    tab-size: 4;
  }

  body {
    /* Typography */
    font-family: ${({ theme }) => theme.typography.fontFamily.sans};
    font-size: ${({ theme }) => theme.typography.fontSize.base};
    font-weight: ${({ theme }) => theme.typography.fontWeight.normal};
    line-height: ${({ theme }) => theme.typography.lineHeight.normal};
    letter-spacing: ${({ theme }) => theme.typography.letterSpacing.normal};
    
    /* Colors */
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    
    /* Improve font rendering */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    /* Disable text size adjust on mobile */
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    
    /* Enable momentum scrolling on iOS */
    -webkit-overflow-scrolling: touch;
  }

  /* Remove default styles from common elements */
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  p {
    margin: 0;
  }

  ol, ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  /* Remove default button styles */
  button {
    background-color: transparent;
    background-image: none;
    border: none;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-align: inherit;
    text-transform: none;
    color: inherit;
  }

  button:focus {
    outline: none;
  }

  /* Remove default fieldset styles */
  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  /* Remove default input styles */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    color: inherit;
  }

  input:focus, textarea:focus, select:focus {
    outline: none;
  }

  /* Remove default table styles */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Improve image handling */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  /* Remove default link styles */
  a {
    color: inherit;
    text-decoration: inherit;
  }

  /* Improve focus visibility */
  *:focus {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }

  *:focus:not(:focus-visible) {
    outline: none;
  }

  /* Improve selection colors */
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.primary[200]};
    color: ${({ theme }) => theme.colors.primary[900]};
  }

  /* Scrollbar styling for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.neutral[100]};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.neutral[400]};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.neutral[500]};
  }

  /* Firefox scrollbar styling */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.colors.neutral[400]} ${({ theme }) => theme.colors.neutral[100]};
  }

  /* Root element styling */
  #root {
    min-height: 100vh;
    isolation: isolate;
  }

  /* Prevent horizontal scrolling */
  body {
    overflow-x: hidden;
  }

  /* Improve motion for users who prefer reduced motion */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Print styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a, a:visited {
      text-decoration: underline;
    }

    abbr[title]:after {
      content: " (" attr(title) ")";
    }

    pre, blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr, img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p, h2, h3 {
      orphans: 3;
      widows: 3;
    }

    h2, h3 {
      page-break-after: avoid;
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    * {
      border-color: CanvasText;
    }
  }

  /* Dark mode support (basic) */
  @media (prefers-color-scheme: dark) {
    :root {
      color-scheme: dark;
    }
  }

  /* Font loading optimization */
  @font-face {
    font-family: 'Inter';
    src: url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
    font-display: swap;
  }

  @font-face {
    font-family: 'JetBrains Mono';
    src: url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
    font-display: swap;
  }
`;
