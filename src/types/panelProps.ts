import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import {ViewProps} from "@vkontakte/vkui/dist/components/View/View";

/**
 * The panel props interface.
 */
export default interface IPanelProps extends PanelProps {
  onShowModal?: (modalName: string) => void;
  onShowPopout?: (popout: ViewProps['popout']) => void;
}