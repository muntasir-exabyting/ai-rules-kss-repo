// Main theme provider and global styles
export { ThemeProvider } from './ThemeProvider';
export { GlobalStyle } from './global';

// Theme configuration and types
export { theme } from './theme';
export type { Theme } from './theme';

// Styled-components type definitions for theme
import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
