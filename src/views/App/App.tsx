import React from 'react';
import {Formik, Form, Field, FieldProps, FormikProps, FormikErrors} from 'formik';
import { AppPanel } from "../../panels";
import { ViewProps } from "@vkontakte/vkui/dist/components/View/View";
import { PanelProps } from "@vkontakte/vkui/dist/components/Panel/Panel";
import IModal from "../../types/modal";
import {connect} from "react-redux";
import {IState} from "../../store/types/state";
import {getFriendsState} from "../../store/reducers/friends";
import {IFriendsState} from "../../store/reducers/friends/types";
import {FirebaseDatabaseMutation} from "@react-firebase/database";
import { Icon24Cancel } from '@vkontakte/icons';
import {
  Button,
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
  DatePicker, Text
} from '@vkontakte/vkui';
import {RunMutation} from "@react-firebase/database/dist/components/FirebaseDatabaseMutation";
import moment from 'moment';

interface Values {
  type: 'lent' | 'borrowed';
  contactId: string | null;
  summary: string | null;
  returnDate: any;
}

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

  const initialValues: Values = {
    type: 'lent',
    contactId: null,
    summary: null,
    returnDate: null
  }

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

  function pad(n: any) {
    return (n < 10) ? ("0" + n) : n;
  }

  function validate(values: Values) {
    const errors: FormikErrors<Values> = {};

    if (!values.summary) {
      errors.summary = 'Введите число';
    } else if (!values.contactId) {
      errors.contactId = 'Выберите контакт';
    }

    return errors;
  }

  async function onSubmit(values: Values, runMutation: RunMutation) {
    await runMutation({
      type: values.type,
      contactId: values.contactId,
      summary: values.summary,
      returnDate: values.returnDate === null ? null : `${pad(values.returnDate.day)}-${pad(values.returnDate.month)}-${values.returnDate.year}`,
      createdAt: moment().format('DD-MM-YYYY')
    }).then(() => {
      onCancelModal();
    });
  }

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={onCancelModal}>
      <ModalPage settlingHeight={100} id="add-debt" header={
        <ModalPageHeader
          left={
            <PanelHeaderButton onClick={() => setActiveModal(null)}>
              <Icon24Cancel />
            </PanelHeaderButton>
          }
        >Добавить долг</ModalPageHeader>
      }>
        <FirebaseDatabaseMutation path={`${userId}`} type="push">
          {({ runMutation }) => {
            return (
              <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values, runMutation)} validate={validate}>
                {({ setFieldValue }: FormikProps<Values>) => (
                  <Form>
                    <Group>
                      <FormLayout>
                        <FormItem>
                          <Field name="type">
                            {({ field }: FieldProps) => (
                              <Radio
                                {...field}
                                name="type"
                                value="lent"
                                defaultChecked
                              >Дал в долг</Radio>
                            )}
                          </Field>
                        </FormItem>
                        <FormItem>
                          <Field name="type">
                            {({ field }: FieldProps) => (
                              <Radio
                                {...field}
                                name="type"
                                value="borrowed"
                              >Взял в долг</Radio>
                            )}
                          </Field>
                        </FormItem>
                        <FormItem top="Сумма">
                          <Field name="summary">
                            {({ field, meta }: FieldProps) => (
                              <div>
                                <Input
                                  {...field}
                                  type="number"
                                  defaultValue={100}
                                  pattern="[0-9]*"
                                  placeholder="Введите сумму"
                                />
                                {meta.error && <Text weight="medium" color="red">{meta.error}</Text>}
                              </div>
                            )}
                          </Field>
                        </FormItem>
                      </FormLayout>
                      <FormItem top="Контакт">
                        <Field name="contactId">
                          {({ field, meta }: FieldProps) => (
                            <div>
                              <Select
                                {...field}
                                placeholder="Выберите контакт"
                                options={createFriendsOptions(props.friends)}
                                renderOption={({ option, ...restProps }) => (
                                  <CustomSelectOption {...restProps} before={<Avatar size={24} src={option.avatar} />} />
                                )}
                              />
                              {meta.error && <Text weight="medium" color="red">{meta.error}</Text>}
                            </div>
                          )}
                        </Field>
                      </FormItem>
                      <FormItem top="Дата возрата">
                        <Field name="returnDate">
                          {({ field }: FieldProps) => (
                            <DatePicker
                              {...field}
                              onDateChange={(date) => {
                                if (!isNaN(date.day) && !isNaN(date.month) && !isNaN(date.year)) {
                                  setFieldValue('returnDate', date);
                                }
                              }}
                              min={{day: new Date().getDay(), month: new Date().getMonth(), year: new Date().getFullYear()}}
                              max={{day: new Date().getDay(), month: new Date().getMonth(), year: new Date().getFullYear() + 1000}}
                              dayPlaceholder="ДД"
                              monthPlaceholder="ММ"
                              yearPlaceholder="ГГ"
                            />
                          )}
                        </Field>
                      </FormItem>
                      <FormItem>
                        <Button type="submit" mode="primary" stretched size="l">
                          Добавить
                        </Button>
                      </FormItem>
                    </Group>
                  </Form>
                )}
              </Formik>
            )
          }}
        </FirebaseDatabaseMutation>
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