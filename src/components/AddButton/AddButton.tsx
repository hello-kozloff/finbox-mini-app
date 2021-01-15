import React from "react";
import { Icon24Add } from '@vkontakte/icons';
import { block } from 'bem-cn';
import { IAddButtonProps } from './types';
import { AppModal } from '../../views/App/types';
import './styles.scss';

/**
 * The class generator.
 */
const addButton = block('add-button');

/**
 * The add button component.
 *
 * @constructor
 */
export default function AddButton(props: IAddButtonProps): React.ReactElement {
  return (
    <button type="button" className={addButton()} onClick={() => props.onModalShow && props.onModalShow(AppModal.AddDebt)}>
      <Icon24Add color="#fff" />
    </button>
  );
}