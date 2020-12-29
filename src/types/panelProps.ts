import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";

/**
 * The panel props interface.
 */
export default interface IPanelProps extends PanelProps {
  onShowModal?: (modalName: string) => void;
}