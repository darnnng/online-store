import Carousel from 'react-material-ui-carousel';
import * as Styled from './sliderCarousel.styles';
import { carouselItems } from './sliderItems';

export const SliderCarousel = () => {
  return (
    <Carousel sx={{ marginTop: '30px' }}>
      {carouselItems.map((item) => (
        <Styled.Image key={item.name}>{item.name}</Styled.Image>
      ))}
    </Carousel>
  );
};
