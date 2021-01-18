import { FlickityOptions } from 'react-flickity-component';

export default interface IDebtCarousel {
  data: {} | null;
  initialIndex?: FlickityOptions['initialIndex'];
  onChange?: (index: number) => void;
}