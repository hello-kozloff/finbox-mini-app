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
      <ui.PanelHeaderButton>
        <icons.Icon24Cancel />
      </ui.PanelHeaderButton>
    }>Добавить долг</ui.ModalPageHeader>
  );

  /**
   * The initial form values.
   */
  const initialValues: IAddDebtValues = {
    type: DebtType.borrowed,
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

    if (!values.sum) {
      errors.sum = 'Введите сумму';
    } else if (!values.friendId) {
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
    return props.friends.map((friend) => {
      return {
        value: friend.id,
        label: getUserName(friend.first_name, friend.last_name),
        photo_100: friend.photo_100
      }
    });
  }

  return (
    <ui.ModalPage id={props.id} header={header}>
      <FirebaseDatabaseMutation path={getCurrentUserId() || '/'} type="push">
        {() => (
          <formik.Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            <formik.Form>
              <formik.Field name="type">
                {({ field }: formik.FieldProps) => (
                  <ui.FormItem top="Тип долга">
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
                {({ field }: formik.FieldProps) => (
                  <ui.FormItem top="Сумма долга(₽)">
                    <ui.Input {...field} type="number" />
                  </ui.FormItem>
                )}
              </formik.Field>
              <formik.Field name="friendId">
                {({ field }: formik.FieldProps) => (
                  <ui.FormItem top="Выберите друга">
                    <ui.Select{...field} options={getFriendsOptions()} />
                  </ui.FormItem>
                )}
              </formik.Field>
            </formik.Form>
          </formik.Formik>
        )}
      </FirebaseDatabaseMutation>
    </ui.ModalPage>
  );
}

const mapStateToProps = (state: IState) => ({
  friends: getFriendsState(state)
});

export default connect(mapStateToProps)(AddDebtModal);