import React from 'react';
import {
  View,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  Group,
  FormLayout,
  FormLayoutGroup,
  FormItem,
  Radio,
  Input,
  Select,
  CustomSelectOption,
  DatePicker,
  Avatar,
  Button
} from '@vkontakte/vkui';
import { Icon24Cancel, Icon24Add } from '@vkontakte/icons';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import IModal from "../../types/modal";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {IFriendsState} from "../../store/reducers/friends/types";
import {FirebaseDatabaseMutation} from "@react-firebase/database";

/**
 * The app view.
 *
 * @constructor
 */
function AppView(props: ViewProps & PanelProps & { friends: IFriendsState }): React.ReactElement {
  const [activeModal, setActiveModal] = React.useState<IModal | null>(null);
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('vk_user_id');

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

  /**
   * The function create friends options.
   * @param friends
   */
  function createFriendsOptions(friends: IFriendsState) {
    const result: { value: number; label: string; avatar: string; }[] = [];

    friends.forEach((friend) => {
      result.push({
        value: friend.id,
        label: `${friend.first_name} ${friend.last_name}`,
        avatar: friend.photo_100
      });
    });

    return result;
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
          <FormLayout>
            <FormLayoutGroup mode="horizontal">
              <FormItem>
                <Radio name="type" value="lent" defaultChecked>
                  Дал в долг
                </Radio>
              </FormItem>
              <FormItem>
                <Radio name="type" value="borrowed">
                  Дал в долг
                </Radio>
              </FormItem>
            </FormLayoutGroup>
            <FormLayoutGroup mode="horizontal">
              <FormItem top="Сумма">
                <Input placeholder="Введите сумму" />
              </FormItem>
              <FormItem top="Валюта">
                <Select
                  options={[
                    { value: 'RUB', label: 'RUB' },
                    { value: 'USD', label: 'USD' }
                  ]}
                  placeholder="Валюта"
                  defaultValue="RUB"
                />
              </FormItem>
            </FormLayoutGroup>
          </FormLayout>
          <FormItem top="Контакт">
            <Select
              placeholder="Выберите контакт"
              options={createFriendsOptions(props.friends)}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
              )}
            />
          </FormItem>
          <FormItem top="Дата возврата">
            <DatePicker
              min={{day: 1, month: 1, year: 1901}}
              max={{day: 1, month: 1, year: 2020}}
              dayPlaceholder="Д"
              monthPlaceholder="ММ"
              yearPlaceholder="ГГ"
            />
          </FormItem>
          <FormItem>
            <FirebaseDatabaseMutation path={`${userId}`} type="push">
              {({ runMutation }) => (
                <Button
                  mode="primary"
                  size="l"
                  before={<Icon24Add />}
                  stretched
                  onClick={async () => {
                    await runMutation({ TEST: 'DATA' });
                  }}>Добавить</Button>
              )}
            </FirebaseDatabaseMutation>
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

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(AppView);