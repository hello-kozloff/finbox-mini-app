import React from 'react';
import { connect } from 'react-redux';
import { FirebaseDatabaseMutation } from '@react-firebase/database';
import * as formik from 'formik';
import * as ui from '@vkontakte/vkui';
import * as icons from "@vkontakte/icons";
import { getCurrentUserId, getUserName } from '../../utils';
import { getFriendsState } from '../../store/reducers/friends';
import IAddDebtModalProps, { IAddDebtValues, IFriendOption, DebtType } from './types';
import { IState } from '../../store/types/state';

function AddDebtModal(props: IAddDebtModalProps): React.ReactElement {
  /**
   * The modal header part.
   */
  const header = (
    <ui.ModalPageHeader left={
      <ui.PanelHeaderButton onClick={() => props.onCancelModal && props.onCancelModal()}>
        <icons.Icon24Cancel />
      </ui.PanelHeaderButton>
    }>Добавить долг</ui.ModalPageHeader>
  );

  /**
   * The initial form values.
   */
  const initialValues: IAddDebtValues = {
    type: undefined,
    sum: undefined,
    friendId: undefined,
    expirationDate: undefined
  };

  /**
   * The function validate values before submit.
   * @param values
   */
  function validate(values: IAddDebtValues): formik.FormikErrors<IAddDebtValues> {
    const errors: formik.FormikErrors<IAddDebtValues> = {};
    props.updateModalHeight && props.updateModalHeight();

    if (!values.type) {
      errors.type = 'Выберите тип долга';
    } else if (!values.sum) {
      errors.sum = 'Введите сумму';
    } else if (!values.friendId || values.friendId === -1) {
      errors.friendId = 'Выберите контакт из списка';
    }

    return errors;
  }

  /**
   * The handle of form submit.
   */
  function onSubmit(values: IAddDebtValues): void {
    return console.log(values);
  }

  /**
   * The function return friends options.
   */
  function getFriendsOptions(): IFriendOption[] {
    const options: IFriendOption[] = [
      { value: -1, label: 'Не выбрано' }
    ];

    props.friends.forEach((friend) => {
      options.push({
        value: friend.id,
        label: getUserName(friend.first_name, friend.last_name),
        photo_100: friend.photo_100
      });
    });

    return options;
  }

  return (
    <ui.ModalPage id={props.id} header={header} dynamicContentHeight={props.dynamicContentHeight}>
      <FirebaseDatabaseMutation path={getCurrentUserId() || '/'} type="push">
        {() => (
          <formik.Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            {({ setFieldValue }: formik.FormikProps<IAddDebtValues>) => (
              <formik.Form>
                <formik.Field name="type">
                  {({ field, meta }: formik.FieldProps) => (
                    <ui.FormItem top="Тип долга*" bottom={meta.touched && meta.error}>
                      <ui.Radio {...field} value={DebtType.borrowed}>
                        Дал в долг
                      </ui.Radio>
                      <ui.Radio {...field} value={DebtType.lent}>
                        Взял в долг
                      </ui.Radio>
                    </ui.FormItem>
                  )}
                </formik.Field>
                <formik.Field name="sum">
                  {({ field, meta }: formik.FieldProps) => (
                    <ui.FormItem top="Сумма*" bottom={meta.touched && meta.error}>
                      <ui.Input {...field} type="number" />
                    </ui.FormItem>
                  )}
                </formik.Field>
                <formik.Field name="friendId">
                  {({ field, meta }: formik.FieldProps) => (
                    <ui.FormItem top="Выберите друга*" bottom={meta.touched && meta.error}>
                      <ui.Select
                        {...field}
                        options={getFriendsOptions()}
                        renderOption={({ option, ...restProps }) => (
                          <ui.CustomSelectOption
                            {...restProps}
                            before={option.photo_100 && (
                              <ui.Avatar
                                src={option.photo_100}
                                size={24}
                              />
                            )}
                          />
                        )}
                        onChange={(event) => {
                          return setFieldValue(field.name, Number(event.target.value));
                        }}
                      />
                    </ui.FormItem>
                  )}
                </formik.Field>
                <formik.Field name="expirationDate">
                  {({ field, meta }: formik.FieldProps) => (
                    <ui.FormItem top="Дата возврата" bottom={meta.touched && meta.error}>
                      <ui.DatePicker
                        {...field}
                        min={{
                          day: new Date().getDay(),
                          month: new Date().getMonth(),
                          year: new Date().getFullYear()
                        }}
                        max={{
                          day: new Date().getDay(),
                          month: new Date().getMonth(),
                          year: new Date().getFullYear() + 100
                        }}
                        onDateChange={(date) => {
                          return setFieldValue(field.name, date);
                        }}
                      />
                    </ui.FormItem>
                  )}
                </formik.Field>
                <ui.FormItem>
                  <ui.Button type="submit" mode="primary" size="l" before={<icons.Icon24Add />} stretched>
                    Добавить
                  </ui.Button>
                </ui.FormItem>
              </formik.Form>
            )}
          </formik.Formik>
        )}
      </FirebaseDatabaseMutation>
    </ui.ModalPage>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(ui.withModalRootContext(AddDebtModal));