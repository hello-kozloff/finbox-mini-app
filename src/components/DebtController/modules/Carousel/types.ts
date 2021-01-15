import { FlickityOptions } from 'react-flickity-component';

export default interface IDebtCarousel {
  initialIndex?: FlickityOptions['initialIndex'];
  onChange?: (index: number) => void;
}