import React, { useState } from 'react';
import styled from 'styled-components';
import { flex, media } from '../styles/utils';
import {
  TextOnlySlide,
  ImageLeftSlide,
  ImageRightSlide,
  FullBleedImageSlide,
  type Slide
} from './slides';
import Button from './Button';
import { kssSlides } from '../data/kssSlides';

const DemoContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const Navigation = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing[4]};
  left: ${({ theme }) => theme.spacing[4]};
  z-index: 1000;
  ${flex.column}
  gap: ${({ theme }) => theme.spacing[2]};
  
  ${media.md(`
    ${flex.between}
    width: calc(100% - 2rem);
    flex-direction: row;
  `)}
`;

const SlideIndicator = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: ${({ theme }) => theme.spacing[2]} ${({ theme }) => theme.spacing[4]};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  backdrop-filter: blur(10px);
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

const ButtonGroup = styled.div`
  ${flex.column}
  gap: ${({ theme }) => theme.spacing[2]};
  
  ${media.md(`
    flex-direction: row;
  `)}
`;

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

const ProgressFill = styled.div<{ progress: number }>`
  height: 100%;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary[500]} 0%,
    ${({ theme }) => theme.colors.secondary[500]} 100%
  );
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease;
`;

const SlideTitle = styled.div`
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  
  ${media.md(`
    max-width: 300px;
  `)}
`;

const SlideDemo: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = kssSlides[currentSlideIndex];
  const progress = ((currentSlideIndex + 1) / kssSlides.length) * 100;

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % kssSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + kssSlides.length) % kssSlides.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        nextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        prevSlide();
      } else if (event.key === 'Home') {
        event.preventDefault();
        setCurrentSlideIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        setCurrentSlideIndex(kssSlides.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const renderSlide = () => {
    switch (currentSlide.type) {
      case 'text':
        return <TextOnlySlide slide={currentSlide} />;
      case 'imageLeft':
        return <ImageLeftSlide slide={currentSlide as Required<Pick<Slide, 'title' | 'body' | 'image'>>} />;
      case 'imageRight':
        return <ImageRightSlide slide={currentSlide as Required<Pick<Slide, 'title' | 'body' | 'image'>>} />;
      case 'fullBleed':
        return <FullBleedImageSlide slide={currentSlide as Required<Pick<Slide, 'title' | 'body' | 'image'>>} showImageCredit />;
      default:
        return <TextOnlySlide slide={currentSlide} />;
    }
  };

  return (
    <DemoContainer>
      <ProgressBar>
        <ProgressFill progress={progress} />
      </ProgressBar>
      
      <Navigation>
        <SlideIndicator>
          <SlideTitle>{currentSlide.title}</SlideTitle>
          <div style={{ opacity: 0.7, fontSize: '0.85em', marginTop: '2px' }}>
            {currentSlideIndex + 1} of {kssSlides.length}
          </div>
        </SlideIndicator>
        
        <ButtonGroup>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
          >
            ← Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextSlide}
            disabled={currentSlideIndex === kssSlides.length - 1}
          >
            Next →
          </Button>
        </ButtonGroup>
      </Navigation>
      
      {renderSlide()}
    </DemoContainer>
  );
};

export default SlideDemo;
