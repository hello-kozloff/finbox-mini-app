import { FlickityOptions } from 'react-flickity-component';
import {Platform} from "@vkontakte/vkui";

export default interface IDebtSection {
  data: {} | null;
  initialIndex?: FlickityOptions['initialIndex'];
  onChange?: (index: number) => void;
}