import React from 'react';
import styled from 'styled-components';
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  children: string;
  language?: string;
  title?: string;
}

const CodeContainer = styled.div`
  margin: ${({ theme }) => theme.spacing[4]} 0;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  background: #1e1e1e;
`;

const CodeTitle = styled.div`
  background: #2d2d2d;
  color: #ffffff;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  border-bottom: 1px solid #404040;
`;

const Pre = styled.pre`
  margin: 0;
  padding: ${({ theme }) => theme.spacing[4]};
  overflow-x: auto;
  font-family: ${({ theme }) => theme.typography.fontFamily.mono};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  line-height: 1.5;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #2d2d2d;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #777;
  }
`;

const CodeBlock: React.FC<CodeBlockProps> = ({ 
  children, 
  language = 'typescript',
  title 
}) => {
  return (
    <CodeContainer>
      {title && <CodeTitle>{title}</CodeTitle>}
      <Highlight
        theme={themes.vsDark}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </Pre>
        )}
      </Highlight>
    </CodeContainer>
  );
};

export default CodeBlock;
