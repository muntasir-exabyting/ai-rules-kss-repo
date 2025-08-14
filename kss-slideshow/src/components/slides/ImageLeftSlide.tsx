import React from 'react';
import styled from 'styled-components';
import { flex, media, animations, transition } from '../../styles/utils';
import { Slide } from '../../../types/Slide';
import TextRenderer from '../TextRenderer';

const SlideContainer = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing[8]};
  padding: ${({ theme }) => theme.spacing[8]};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background.primary} 0%,
    ${({ theme }) => theme.colors.background.secondary} 100%
  );
  
  ${media.md(`
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    padding: 3rem 4rem;
    align-items: center;
  `)}
  
  ${media.lg(`
    gap: 4rem;
    padding: 4rem 6rem;
  `)}
`;

const ImageWrapper = styled.div<{ $aspect: "wide" | "square" | "portrait" }>`
  position: relative;
  width: 100%;
  order: 1;
  ${animations.slideUp}
  animation: slideUp 0.8s ease-out;
  
  ${media.md(`
    order: 0;
  `)}
  
  /* Aspect ratio containers */
  ${({ $aspect }) => {
    switch ($aspect) {
      case 'wide':
        return `
          aspect-ratio: 16/9;
          max-height: 60vh;
        `;
      case 'square':
        return `
          aspect-ratio: 1/1;
          max-height: 70vh;
        `;
      case 'portrait':
        return `
          aspect-ratio: 3/4;
          max-height: 80vh;
        `;
      default:
        return `aspect-ratio: 16/9;`;
    }
  }}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.xl};
  ${transition('transform, box-shadow')}
  
  &:hover {
    transform: scale(1.02);
    box-shadow: ${({ theme }) => theme.boxShadow['2xl']};
  }
  
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const ContentWrapper = styled.div`
  ${flex.column}
  justify-content: center;
  order: 2;
  ${animations.fadeIn}
  animation: fadeIn 0.8s ease-out 0.2s both;
  
  ${media.md(`
    order: 1;
  `)}
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  ${transition()}
  
  ${media.sm(`
    font-size: 1.875rem;
  `)}
  
  ${media.md(`
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  `)}
  
  ${media.lg(`
    font-size: 3rem;
  `)}
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  ${transition()}
  
  ${media.sm(`
    font-size: 1.125rem;
  `)}
  
  ${media.md(`
    font-size: 1.25rem;
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

interface ImageLeftSlideProps {
  slide: Required<Pick<Slide, 'title' | 'body' | 'image'>>;
  className?: string;
}

const ImageLeftSlide: React.FC<ImageLeftSlideProps> = ({ slide, className }) => {
  return (
    <SlideContainer className={className}>
      <ImageWrapper $aspect={slide.image.aspect}>
        <Image src={slide.image.src} alt={slide.image.alt} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{slide.title}</Title>
        <Body as={TextRenderer}>{slide.body}</Body>
      </ContentWrapper>
    </SlideContainer>
  );
};

export default ImageLeftSlide;
