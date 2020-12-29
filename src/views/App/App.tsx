import React from 'react';
import {
  View,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  Group,
  FormItem,
  Radio,
  Input,
  Select,
  CustomSelectOption,
  Avatar,
  Button
} from '@vkontakte/vkui';
import { Icon24Cancel, Icon24Add } from '@vkontakte/icons';
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
        >Добавить долг</ModalPageHeader>
      }>
        <Group>
          <FormItem top="Тип долга">
            <Radio name="type" value="lent" defaultChecked>
              Дал в долг
            </Radio>
            <Radio name="type" value="borrowed">
              Взял в долг
            </Radio>
          </FormItem>
          <FormItem top="Сумма">
            <div style={{ display: 'grid', gridAutoFlow: 'column', gap: '12px', gridTemplateColumns: '1fr 100px' }}>
              <Input placeholder="Введите сумму" />
              <Select
                options={[
                  { value: 'RUB', label: 'RUB' },
                  { value: 'USD', label: 'USD' }
                ]}
                placeholder="Валюта"
                defaultValue="RUB"
              />
            </div>
          </FormItem>
          <FormItem top="Контакт">
            <Select
              placeholder="Выберите контакт"
              options={[]}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
              )}
            />
          </FormItem>
          <FormItem>
            <Button mode="primary" size="l" before={<Icon24Add />} stretched>
              Добавить
            </Button>
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