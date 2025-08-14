import React from 'react';
import styled from 'styled-components';
import { flex, media, animations, transition, glassMorphism } from '../../styles/utils';
import { Slide } from '../../../types/Slide';

const SlideContainer = styled.div`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  ${transition('transform')}
  
  /* Parallax effect on hover */
  &:hover {
    transform: scale(1.05);
  }
  
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: none;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.4) 100%
  );
  z-index: 1;
`;

const ContentWrapper = styled.div<{ $imageAspect: "wide" | "square" | "portrait" }>`
  position: relative;
  ${flex.columnCenter}
  min-height: 100vh;
  padding: ${({ theme }) => theme.spacing[8]};
  z-index: 2;
  text-align: center;
  
  /* Adjust positioning based on image aspect ratio */
  ${({ $imageAspect }) => {
    switch ($imageAspect) {
      case 'wide':
        return `
          justify-content: flex-end;
          padding-bottom: 15vh;
        `;
      case 'square':
        return `
          justify-content: center;
        `;
      case 'portrait':
        return `
          justify-content: flex-start;
          padding-top: 15vh;
        `;
      default:
        return `justify-content: center;`;
    }
  }}
  
  ${media.md(`
    padding: 3rem 4rem;
  `)}
  
  ${media.lg(`
    padding: 4rem 6rem;
  `)}
`;

const TextContainer = styled.div`
  max-width: 900px;
  width: 100%;
  ${glassMorphism(0.15)}
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing[8]};
  ${animations.fadeIn}
  animation: fadeIn 1s ease-out 0.3s both;
  
  ${media.md(`
    padding: 2.5rem 3rem;
  `)}
  
  ${media.lg(`
    padding: 3rem 4rem;
  `)}
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.inverse};
  margin-bottom: ${({ theme }) => theme.spacing[4]};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
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
  
  ${media.xl(`
    font-size: 3.75rem;
  `)}
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: rgba(255, 255, 255, 0.95);
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  ${transition()}
  
  ${media.sm(`
    font-size: 1.125rem;
  `)}
  
  ${media.md(`
    font-size: 1.25rem;
    line-height: 2;
  `)}
  
  ${media.lg(`
    font-size: 1.5rem;
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

const ImageCredit = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  color: rgba(255, 255, 255, 0.7);
  background: rgba(0, 0, 0, 0.3);
  padding: ${({ theme }) => theme.spacing[1]} ${({ theme }) => theme.spacing[2]};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  backdrop-filter: blur(4px);
  z-index: 3;
  ${transition()}
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    background: rgba(0, 0, 0, 0.5);
  }
`;

interface FullBleedImageSlideProps {
  slide: Required<Pick<Slide, 'title' | 'body' | 'image'>>;
  showImageCredit?: boolean;
  className?: string;
}

const FullBleedImageSlide: React.FC<FullBleedImageSlideProps> = ({ 
  slide, 
  showImageCredit = false,
  className 
}) => {
  return (
    <SlideContainer className={className}>
      <BackgroundImage src={slide.image.src} alt={slide.image.alt} />
      <Overlay />
      
      <ContentWrapper $imageAspect={slide.image.aspect}>
        <TextContainer>
          <Title>{slide.title}</Title>
          <Body>{slide.body}</Body>
        </TextContainer>
      </ContentWrapper>
      
      {showImageCredit && (
        <ImageCredit>
          {slide.image.alt}
        </ImageCredit>
      )}
    </SlideContainer>
  );
};

export default FullBleedImageSlide;
