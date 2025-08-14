export interface SlideImage {
  src: string;
  alt: string;
  aspect: "wide" | "square" | "portrait";
}

export interface Slide {
  title: string;
  body: string;
  image?: SlideImage;
  layout?: "imageLeft" | "fullImage";
}
