import React from 'react';
import styled from 'styled-components';
import CodeBlock from './CodeBlock';

interface TextRendererProps {
  children: string;
  className?: string;
}

const TextContainer = styled.div`
  /* Handle line breaks in text */
  white-space: pre-wrap;
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Parse text and render code blocks
const parseTextWithCodeBlocks = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  let currentIndex = 0;
  
  // Regex to match code blocks with optional language
  const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
  let match;
  
  while ((match = codeBlockRegex.exec(text)) !== null) {
    const [fullMatch, language, code] = match;
    const startIndex = match.index;
    
    // Add text before code block
    if (startIndex > currentIndex) {
      const textBefore = text.slice(currentIndex, startIndex);
      if (textBefore.trim()) {
        parts.push(
          <span key={`text-${currentIndex}`}>
            {textBefore}
          </span>
        );
      }
    }
    
    // Add code block
    parts.push(
      <CodeBlock 
        key={`code-${startIndex}`} 
        language={language || 'text'}
      >
        {code}
      </CodeBlock>
    );
    
    currentIndex = startIndex + fullMatch.length;
  }
  
  // Add remaining text after last code block
  if (currentIndex < text.length) {
    const remainingText = text.slice(currentIndex);
    if (remainingText.trim()) {
      parts.push(
        <span key={`text-${currentIndex}`}>
          {remainingText}
        </span>
      );
    }
  }
  
  // If no code blocks found, return original text
  if (parts.length === 0) {
    return [text];
  }
  
  return parts;
};

const TextRenderer: React.FC<TextRendererProps> = ({ children, className }) => {
  const parsedContent = parseTextWithCodeBlocks(children);
  
  return (
    <TextContainer className={className}>
      {parsedContent}
    </TextContainer>
  );
};

export default TextRenderer;
