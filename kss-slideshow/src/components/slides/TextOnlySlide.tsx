import React from 'react';
import styled from 'styled-components';
import { flex, media, animations, transition } from '../../styles/utils';
import { Slide } from '../../../types/Slide';
import TextRenderer from '../TextRenderer';

const SlideContainer = styled.div`
  ${flex.columnCenter}
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[8]};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.primary} 0%,
    ${({ theme }) => theme.colors.background.secondary} 100%
  );
  
  ${media.md(`
    padding: 3rem 4rem;
  `)}
  
  ${media.lg(`
    padding: 4rem 6rem;
  `)}
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: center;
  ${animations.fadeIn}
  animation: fadeIn 0.8s ease-out;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  ${transition()}
  
  ${media.sm(`
    font-size: 2.25rem;
  `)}
  
  ${media.md(`
    font-size: 3rem;
    margin-bottom: 2rem;
  `)}
  
  ${media.lg(`
    font-size: 3.75rem;
  `)}
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  ${transition()}
  
  ${media.sm(`
    font-size: 1.25rem;
  `)}
  
  ${media.md(`
    font-size: 1.5rem;
    line-height: 2;
  `)}
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  /* Handle line breaks in text */
  white-space: pre-wrap;
`;

interface TextOnlySlideProps {
  slide: Pick<Slide, 'title' | 'body'>;
  className?: string;
}

const TextOnlySlide: React.FC<TextOnlySlideProps> = ({ slide, className }) => {
  return (
    <SlideContainer className={className}>
      <ContentWrapper>
        <Title>{slide.title}</Title>
        <Body as={TextRenderer}>{slide.body}</Body>
      </ContentWrapper>
    </SlideContainer>
  );
};

export default TextOnlySlide;
