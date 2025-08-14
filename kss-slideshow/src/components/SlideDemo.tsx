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

// Sample slide data with different image aspects
const sampleSlides: Array<Slide & { type: 'text' | 'imageLeft' | 'imageRight' | 'fullBleed' }> = [
  {
    type: 'text',
    title: 'Text-Only Slide',
    body: 'This slide demonstrates clean typography with no distracting images. Perfect for key messages, quotes, or important announcements.\n\nThe responsive layout adapts beautifully across all screen sizes.'
  },
  {
    type: 'imageLeft',
    title: 'Wide Image Layout',
    body: 'This layout places a wide-aspect image on the left with text content on the right. The 16:9 aspect ratio is perfect for landscapes, screenshots, or panoramic shots.\n\nThe grid layout automatically stacks on mobile devices.',
    image: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop&crop=entropy',
      alt: 'Mountain landscape with wide aspect ratio',
      aspect: 'wide'
    }
  },
  {
    type: 'imageRight',
    title: 'Square Image Layout',
    body: 'Here we have a square image positioned on the right. The 1:1 aspect ratio works great for products, portraits, or social media content.\n\nNotice how the layout maintains balance across different screen sizes.',
    image: {
      src: 'https://images.unsplash.com/photo-1494790108755-2616c96470d4?w=600&h=600&fit=crop&crop=entropy',
      alt: 'Portrait photo with square aspect ratio',
      aspect: 'square'
    }
  },
  {
    type: 'imageLeft',
    title: 'Portrait Image Layout',
    body: 'This slide features a portrait-oriented image with a 3:4 aspect ratio. Perfect for showcasing tall buildings, full-body portraits, or mobile app screenshots.\n\nThe layout intelligently adjusts the image container height.',
    image: {
      src: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=450&h=600&fit=crop&crop=entropy',
      alt: 'Tall building with portrait aspect ratio',
      aspect: 'portrait'
    }
  },
  {
    type: 'fullBleed',
    title: 'Full-Bleed Experience',
    body: 'The full-bleed layout creates an immersive experience with the image filling the entire viewport. Text appears in a glassmorphism container that adapts its position based on the image aspect ratio.\n\nThis layout is perfect for dramatic presentations and hero slides.',
    image: {
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=entropy',
      alt: 'Dramatic mountain landscape for full-bleed display',
      aspect: 'wide'
    }
  }
];

const SlideDemo: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const currentSlide = sampleSlides[currentSlideIndex];

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % sampleSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + sampleSlides.length) % sampleSlides.length);
  };

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
      <Navigation>
        <SlideIndicator>
          {currentSlide.type.charAt(0).toUpperCase() + currentSlide.type.slice(1)} Layout
          {currentSlide.image && ` • ${currentSlide.image.aspect} aspect`}
          {` (${currentSlideIndex + 1} of ${sampleSlides.length})`}
        </SlideIndicator>
        
        <ButtonGroup>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={prevSlide}
          >
            ← Previous
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={nextSlide}
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
