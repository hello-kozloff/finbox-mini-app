import { ModalPageProps } from '@vkontakte/vkui/dist/components/ModalPage/ModalPage';

/**
 * The modal props interface.
 */
export default interface IModalProps {
  id: ModalPageProps['id'];
  onCancelModal?: () => void;
  updateModalHeight?: () => void;
  dynamicContentHeight?: ModalPageProps['dynamicContentHeight'];
}