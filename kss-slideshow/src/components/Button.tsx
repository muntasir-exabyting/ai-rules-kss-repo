import React from 'react';
import styled from 'styled-components';
import { focusStyles, transition, hoverEffect } from '../styles/utils';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const StyledButton = styled.button<Omit<ButtonProps, 'children' | 'onClick'>>`
  /* Reset and base styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  text-decoration: none;
  font-family: ${({ theme }) => theme.typography.fontFamily.sans};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  white-space: nowrap;
  user-select: none;
  
  /* Transitions */
  ${transition('all')}
  
  /* Focus styles */
  ${focusStyles}
  
  /* Size variants */
  ${({ size = 'md', theme }) => {
    switch (size) {
      case 'sm':
        return `
          padding: ${theme.spacing[2]} ${theme.spacing[3]};
          font-size: ${theme.typography.fontSize.sm};
          min-height: 32px;
        `;
      case 'lg':
        return `
          padding: ${theme.spacing[4]} ${theme.spacing[6]};
          font-size: ${theme.typography.fontSize.lg};
          min-height: 48px;
        `;
      default:
        return `
          padding: ${theme.spacing[3]} ${theme.spacing[5]};
          font-size: ${theme.typography.fontSize.base};
          min-height: 40px;
        `;
    }
  }}
  
  /* Variant styles */
  ${({ variant = 'primary', theme }) => {
    switch (variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary[500]};
          color: ${theme.colors.text.inverse};
          box-shadow: ${theme.boxShadow.sm};
          
          ${hoverEffect(`
            background-color: ${theme.colors.primary[600]};
            box-shadow: ${theme.boxShadow.md};
            transform: translateY(-1px);
          `)}
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.boxShadow.sm};
          }
        `;
      
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary[500]};
          color: ${theme.colors.text.inverse};
          box-shadow: ${theme.boxShadow.sm};
          
          ${hoverEffect(`
            background-color: ${theme.colors.secondary[600]};
            box-shadow: ${theme.boxShadow.md};
            transform: translateY(-1px);
          `)}
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.boxShadow.sm};
          }
        `;
      
      case 'accent':
        return `
          background-color: ${theme.colors.accent[500]};
          color: ${theme.colors.text.inverse};
          box-shadow: ${theme.boxShadow.sm};
          
          ${hoverEffect(`
            background-color: ${theme.colors.accent[600]};
            box-shadow: ${theme.boxShadow.md};
            transform: translateY(-1px);
          `)}
          
          &:active {
            transform: translateY(0);
            box-shadow: ${theme.boxShadow.sm};
          }
        `;
      
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.primary[600]};
          border: 2px solid ${theme.colors.primary[300]};
          
          ${hoverEffect(`
            border-color: ${theme.colors.primary[500]};
            background-color: ${theme.colors.primary[50]};
            color: ${theme.colors.primary[700]};
          `)}
          
          &:active {
            background-color: ${theme.colors.primary[100]};
          }
        `;
      
      default:
        return '';
    }
  }}
  
  /* Disabled state */
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  `}
  
  /* Loading state animation */
  &[data-loading="true"] {
    position: relative;
    color: transparent;
    
    &::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border: 2px solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin ${({ theme }) => theme.motion.duration.normal * 4}ms linear infinite;
    }
    
    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }
  }
`;

/**
 * Versatile Button component with theme integration
 * 
 * @example
 * ```tsx
 * <Button variant="primary" size="md" onClick={handleClick}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  onClick,
  type = 'button',
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={onClick}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
