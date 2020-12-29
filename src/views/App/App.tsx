import React from 'react';
import { View, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderButton, Group, FormItem, Input } from '@vkontakte/vkui';
import { Icon24Cancel, Icon24Done } from '@vkontakte/icons';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import IModal from "../../types/modal";

/**
 * The app view.
 *
 * @constructor
 */
export default function AppView(props: ViewProps & PanelProps): React.ReactElement {
  const [activeModal, setActiveModal] = React.useState<IModal | null>(null);

  /**
   * The function show modal.
   * @param modalName
   */
  function onShowModal(modalName: string): void {
    return setActiveModal(modalName);
  }

  /**
   * The function cancel modal.
   */
  function onCancelModal(): void {
    return setActiveModal(null);
  }

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={onCancelModal}>
      <ModalPage id="add-debt" header={
        <ModalPageHeader
          left={
            <PanelHeaderButton onClick={() => setActiveModal(null)}>
              <Icon24Cancel />
            </PanelHeaderButton>
          }
          right={
            <PanelHeaderButton>
              <Icon24Done />
            </PanelHeaderButton>
          }
        >Добавить долг</ModalPageHeader>
      }>
        <Group>
          <FormItem top="Сумма">
            <Input placeholder="К примеру: 347 ₽" />
          </FormItem>
        </Group>
      </ModalPage>
    </ModalRoot>
  );

  return (
    <View id={props.id} modal={modal} activePanel={props.activePanel}>
      <AppPanel id={props.id} onShowModal={onShowModal} />
    </View>
  );
}