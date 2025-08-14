import { css } from 'styled-components';
import { Theme } from './theme';

/**
 * Utility functions for working with the theme system
 */

/**
 * Generate responsive media queries based on breakpoints
 * @param breakpoint - The breakpoint key from theme.breakpoints
 * @param content - CSS content to apply at the breakpoint
 */
export const breakpoint = (breakpoint: keyof Theme['breakpoints'], content: string) => css`
  @media (min-width: ${({ theme }: { theme: Theme }) => theme.breakpoints[breakpoint]}) {
    ${content}
  }
`;

/**
 * Generate media query for mobile-first responsive design
 */
export const media = {
  xs: (content: string) => breakpoint('xs', content),
  sm: (content: string) => breakpoint('sm', content),
  md: (content: string) => breakpoint('md', content),
  lg: (content: string) => breakpoint('lg', content),
  xl: (content: string) => breakpoint('xl', content),
  '2xl': (content: string) => breakpoint('2xl', content),
};

/**
 * Create hover effects that respect reduced motion preferences
 */
export const hoverEffect = (styles: string) => css`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${styles}
    }
  }
`;

/**
 * Create focus styles that are accessible and consistent
 */
export const focusStyles = css`
  &:focus {
    outline: 2px solid ${({ theme }: { theme: Theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }: { theme: Theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
`;

/**
 * Create smooth transitions that respect motion preferences
 */
export const transition = (properties: string = 'all') => css`
  transition: ${properties} ${({ theme }: { theme: Theme }) => theme.motion.duration.normal}ms ${({ theme }: { theme: Theme }) => theme.motion.ease.inOut};

  @media (prefers-reduced-motion: reduce) {
    transition-duration: 1ms;
  }
`;

/**
 * Truncate text with ellipsis
 */
export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

/**
 * Visually hide content while keeping it accessible to screen readers
 */
export const visuallyHidden = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

/**
 * Create a glass morphism effect
 */
export const glassMorphism = (opacity: number = 0.1) => css`
  background: rgba(255, 255, 255, ${opacity});
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: ${({ theme }: { theme: Theme }) => theme.boxShadow.lg};
`;

/**
 * Create container with max width and centering
 */
export const container = css`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }: { theme: Theme }) => theme.spacing[4]};

  ${media.sm(`
    padding: 0 ${({ theme }: { theme: Theme }) => theme.spacing[6]};
  `)}

  ${media.lg(`
    padding: 0 ${({ theme }: { theme: Theme }) => theme.spacing[8]};
  `)}
`;

/**
 * Create flexbox utilities
 */
export const flex = {
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  
  between: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  
  column: css`
    display: flex;
    flex-direction: column;
  `,
  
  columnCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
};

/**
 * Get color value from theme with optional opacity
 */
export const getColor = (colorPath: string, opacity?: number) => {
  return ({ theme }: { theme: Theme }) => {
    const color = colorPath.split('.').reduce((obj, key) => obj?.[key], theme.colors as any);
    
    if (!color) {
      console.warn(`Color path "${colorPath}" not found in theme`);
      return theme.colors.neutral[500];
    }
    
    if (opacity !== undefined) {
      // Convert hex to rgba
      const hex = color.replace('#', '');
      const r = parseInt(hex.substr(0, 2), 16);
      const g = parseInt(hex.substr(2, 2), 16);
      const b = parseInt(hex.substr(4, 2), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
    
    return color;
  };
};

/**
 * Animation keyframes for common animations
 */
export const animations = {
  fadeIn: css`
    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  
  slideUp: css`
    @keyframes slideUp {
      from {
        transform: translateY(20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  
  slideDown: css`
    @keyframes slideDown {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,
  
  scale: css`
    @keyframes scale {
      from {
        transform: scale(0.9);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `,
  
  pulse: css`
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: 0.5;
      }
    }
  `,
};
