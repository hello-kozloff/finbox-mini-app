import { FlickityOptions } from 'react-flickity-component';
import {Platform} from "@vkontakte/vkui";

export default interface IDebtCarousel {
  data: {} | null;
  initialIndex?: FlickityOptions['initialIndex'];
  onChange?: (index: number) => void;
  platform: Platform;
}