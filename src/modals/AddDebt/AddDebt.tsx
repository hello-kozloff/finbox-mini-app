import React from 'react';
import { FirebaseDatabaseMutation } from '@react-firebase/database';
import * as formik from 'formik';
import * as ui from '@vkontakte/vkui';
import * as icons from "@vkontakte/icons";
import { getCurrentUserId } from '../../utils';
import IModalProps from '../../types/modalProps';
import { IAddDebtValues, DebtType } from './types';

export default function AddDebtModal(props: IModalProps): React.ReactElement {
  const userId = getCurrentUserId();

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

  return userId && (
    <ui.ModalPage id={props.id} header={header}>
      <FirebaseDatabaseMutation path={userId} type="push">
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
            </formik.Form>
          </formik.Formik>
        )}
      </FirebaseDatabaseMutation>
    </ui.ModalPage>
  ) || <React.Fragment />;
}