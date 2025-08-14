import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from './global';

interface ThemeProviderProps {
  children: React.ReactNode;
}

/**
 * ThemeProvider component that provides theme context and applies global styles.
 * 
 * This component wraps the entire application and provides:
 * - Theme context for styled-components
 * - Global CSS reset and base styles
 * - Font loading and optimization
 * - Accessibility improvements
 * - Responsive design support
 * 
 * @example
 * ```tsx
 * import { ThemeProvider } from './styles/ThemeProvider';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </StyledThemeProvider>
  );
};

// Re-export theme and types for convenience
export { theme } from './theme';
export type { Theme } from './theme';
