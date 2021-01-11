import React from 'react';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import IModal from "../../types/modal";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {IFriendsState} from "../../store/reducers/friends/types";
import {FirebaseDatabaseMutation} from "@react-firebase/database";
import { Icon24Cancel, Icon24Add } from '@vkontakte/icons';
import {
  View,
  ModalRoot,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
  Group,
  FormLayout,
  FormItem,
  Radio,
  Input,
  Select,
  CustomSelectOption,
  Avatar,
  DatePicker
} from '@vkontakte/vkui';
import moment, { Moment } from 'moment';

/**
 * The app view.
 *
 * @constructor
 */
function AppView(props: ViewProps & PanelProps & { friends: IFriendsState }): React.ReactElement {
  const [activeModal, setActiveModal] = React.useState<IModal | null>(null);
  const [formState, setFormState] = React.useState<{
    type: string | null;
    summary: string | null;
    contactId: string | null;
    returnDate: string | null;
  }>({
    type: 'lent',
    summary: null,
    contactId: null,
    returnDate: null
  });
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const userId = urlParams.get('vk_user_id');

  function resetState() {
    return setFormState({
      type: formState.type,
      summary: null,
      contactId: null,
      returnDate: null
    });
  }

  /**
   * The function show modal.
   * @param modalName
   */
  function onShowModal(modalName: string): void {
    resetState();
    return setActiveModal(modalName);
  }

  console.log(formState);

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
          right={
            formState.type !== null &&
            formState.summary !== null &&
            formState.contactId !== null &&
            <FirebaseDatabaseMutation path={`${userId}/${formState.type}`} type="push">
              {({ runMutation }) => (
                <PanelHeaderButton onClick={async () => {
                  await runMutation({
                    summary: formState.summary,
                    contactId: formState.contactId,
                    returnDate: formState.returnDate,
                    createdAt: moment().format('DD-MM-YYYY')
                  });

                  onCancelModal();
                }}>
                  <Icon24Add />
                </PanelHeaderButton>
              )}
            </FirebaseDatabaseMutation>
          }
        >Добавить долг</ModalPageHeader>
      }>
        <Group>
          <FormLayout>
            <FormItem>
              <Radio
                name="type"
                value="lent"
                defaultChecked={formState.type === 'lent' ? true : undefined}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    type: e.target.value
                  });
                }}
              >Дал в долг</Radio>
            </FormItem>
            <FormItem>
              <Radio
                name="type"
                value="borrowed"
                defaultChecked={formState.type === 'borrowed' ? true : undefined}
                onChange={(e) => {
                  setFormState({
                    ...formState,
                    type: e.target.value
                  });
                }}
              >Взял в долг</Radio>
            </FormItem>
            <FormItem top="Сумма">
              <Input
                placeholder="Введите сумму"
                onBlur={(e) => {
                  setFormState({
                    ...formState,
                    summary: e.target.value
                  });
                }}
              />
            </FormItem>
          </FormLayout>
          <FormItem top="Контакт">
            <Select
              placeholder="Выберите контакт"
              options={createFriendsOptions(props.friends)}
              onChange={(e) => {
                setFormState({
                  ...formState,
                  contactId: e.target.value
                });
              }}
              renderOption={({ option, ...restProps }) => (
                <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
              )}
            />
          </FormItem>
          <FormItem top="Дата">
            <DatePicker
              min={{day: 1, month: 1, year: 1901}}
              max={{day: 1, month: 1, year: 2006}}
              onDateChange={(date) => {
                console.log(date);
                setFormState({
                  ...formState,
                  returnDate: moment(`${String(date.day).slice(-2)}-${String(date.month).slice(-2)}-${date.year}`).format('DD-MM-YYYY')
                });
              }}
              dayPlaceholder="ДД"
              monthPlaceholder="ММ"
              yearPlaceholder="ГГ"
            />
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