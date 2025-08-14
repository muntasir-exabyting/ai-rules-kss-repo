# Theme System Documentation

This directory contains the complete theme system for the KSS Slideshow application. The theme provides a consistent design language with vibrant but professional colors, typography, spacing, and motion timings.

## Overview

The theme system is built on top of `styled-components` and provides:
- **Vibrant Color Palette**: Modern blues, purples, and greens with proper contrast ratios
- **Typography Scale**: Responsive font sizes with Inter font family
- **Spacing System**: 8px base unit for consistent spacing
- **Motion Timings**: Smooth animations with reduced motion support
- **Global Reset**: Modern CSS reset with accessibility improvements
- **Utility Functions**: Helper functions for common styling patterns

## Files

### `theme.ts`
The main theme configuration object containing:
- Color palettes (primary, secondary, accent, neutral, semantic)
- Typography scales and font families
- Spacing system based on 8px units
- Border radius, shadows, and z-index scales
- Motion timings and easing functions
- Responsive breakpoints

### `global.ts`
Global styles including:
- CSS reset and normalize
- Font family and typography settings
- Focus and accessibility styles
- Print and high contrast mode support
- Scrollbar styling
- Reduced motion preferences

### `ThemeProvider.tsx`
The main provider component that wraps your application:
```tsx
import { ThemeProvider } from './styles';

function App() {
  return (
    <ThemeProvider>
      <YourApp />
    </ThemeProvider>
  );
}
```

### `utils.ts`
Utility functions for common styling patterns:
- Responsive breakpoints
- Focus and hover effects
- Transitions with motion preferences
- Container and flexbox utilities
- Animation keyframes
- Color manipulation helpers

### `index.ts`
Central export file with TypeScript declarations for styled-components theme support.

## Usage Examples

### Basic Component with Theme
```tsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.text.inverse};
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: ${({ theme }) => theme.motion.transition.colors};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary[600]};
  }
`;
```

### Using Utility Functions
```tsx
import styled from 'styled-components';
import { flex, media, transition, focusStyles } from '../styles/utils';

const Container = styled.div`
  ${flex.center}
  ${transition('all')}
  ${focusStyles}
  
  padding: ${({ theme }) => theme.spacing[4]};
  
  ${media.md(`
    padding: ${({ theme }) => theme.spacing[8]};
  `)}
`;
```

### Responsive Design
```tsx
import styled from 'styled-components';
import { media } from '../styles/utils';

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[4]};
  
  ${media.md(`
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing[6]};
  `)}
  
  ${media.lg(`
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing[8]};
  `)}
`;
```

### Color Usage
```tsx
import styled from 'styled-components';
import { getColor } from '../styles/utils';

const Alert = styled.div<{ variant: 'success' | 'warning' | 'error' }>`
  padding: ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  background-color: ${({ variant }) => {
    switch (variant) {
      case 'success': return getColor('accent.50');
      case 'warning': return getColor('warning', 0.1);
      case 'error': return getColor('error', 0.1);
      default: return getColor('neutral.50');
    }
  }};
  
  color: ${({ variant, theme }) => {
    switch (variant) {
      case 'success': return theme.colors.accent[800];
      case 'warning': return theme.colors.warning;
      case 'error': return theme.colors.error;
      default: return theme.colors.text.primary;
    }
  }};
  
  border: 1px solid ${({ variant, theme }) => {
    switch (variant) {
      case 'success': return theme.colors.accent[200];
      case 'warning': return theme.colors.warning;
      case 'error': return theme.colors.error;
      default: return theme.colors.border.light;
    }
  }};
`;
```

### Animation Examples
```tsx
import styled, { keyframes } from 'styled-components';
import { animations } from '../styles/utils';

const fadeIn = keyframes`
  ${animations.fadeIn}
`;

const Modal = styled.div`
  animation: ${fadeIn} ${({ theme }) => theme.motion.duration.normal}ms ${({ theme }) => theme.motion.ease.out};
  
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
```

## Color Palette

### Primary (Blue)
- 50: `#f0f9ff` - Lightest background
- 100: `#e0f2fe` - Light background
- 500: `#0ea5e9` - **Main primary color**
- 600: `#0284c7` - Hover state
- 900: `#0c4a6e` - Darkest

### Secondary (Purple)
- 50: `#faf5ff` - Lightest background
- 100: `#f3e8ff` - Light background
- 500: `#a855f7` - **Main secondary color**
- 600: `#9333ea` - Hover state
- 900: `#581c87` - Darkest

### Accent (Green)
- 50: `#f0fdf4` - Lightest background
- 100: `#dcfce7` - Light background
- 500: `#22c55e` - **Main accent color**
- 600: `#16a34a` - Hover state
- 900: `#14532d` - Darkest

## Typography Scale

- **xs**: 12px - Small text, captions
- **sm**: 14px - Secondary text
- **base**: 16px - Body text (default)
- **lg**: 18px - Large body text
- **xl**: 20px - Small headings
- **2xl**: 24px - Medium headings
- **3xl**: 30px - Large headings
- **4xl**: 36px - Extra large headings
- **5xl**: 48px - Display headings
- **6xl**: 60px - Large display
- **7xl**: 72px - Extra large display

## Spacing Scale

Based on 8px units for consistent spacing:
- **1**: 4px
- **2**: 8px (base unit)
- **3**: 12px
- **4**: 16px
- **6**: 24px
- **8**: 32px
- **12**: 48px
- **16**: 64px
- **20**: 80px

## Motion Timings

- **fast**: 150ms - Quick interactions
- **normal**: 300ms - Standard transitions
- **slow**: 500ms - Complex animations
- **slower**: 750ms - Page transitions

## Accessibility Features

The theme system includes:
- WCAG compliant color contrast ratios
- Focus visible styles
- Reduced motion support
- Screen reader friendly utilities
- High contrast mode support
- Keyboard navigation support

## Best Practices

1. **Use theme values consistently** - Always use theme values instead of hardcoded values
2. **Respect motion preferences** - Use motion utilities that handle reduced motion
3. **Maintain contrast ratios** - Ensure proper contrast for accessibility
4. **Use semantic colors** - Use success/warning/error colors for their intended purpose
5. **Follow spacing system** - Stick to the 8px spacing scale
6. **Test responsiveness** - Use breakpoint utilities for responsive design
7. **Consider dark mode** - Theme is structured to support dark mode in the future

## Extending the Theme

To add new theme values, modify `theme.ts`:

```tsx
export const theme = {
  // Existing theme...
  
  // Add custom values
  custom: {
    headerHeight: '64px',
    sidebarWidth: '280px',
    animationDuration: {
      tooltip: 100,
      modal: 200,
    },
  },
} as const;
```

Then update the TypeScript types and use throughout your components.
