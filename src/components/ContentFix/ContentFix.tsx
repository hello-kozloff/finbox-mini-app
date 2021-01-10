import React from 'react';
import { block } from 'bem-cn';
import { IContentFixProps } from './types';
import './styles.scss';

/**
 * The class generator.
 */
const contactFix = block('contact-fix');

/**
 * The content fix component.
 *
 * @param props
 * @constructor
 */
export default function ContentFix(props: IContentFixProps): React.ReactElement {
  return (
    <div className={contactFix()}>
      {props.children}
    </div>
  );
}