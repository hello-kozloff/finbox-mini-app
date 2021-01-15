import React from 'react';
import { block } from 'bem-cn';
import {Avatar} from "@vkontakte/vkui";
import './styles.scss';

const catalogItem = block('catalog-item');

export default function CatalogItem(props: {
  href: string;
  avatarSrc: string;
  title: string;
  value: string;
}) {
  return (
    <a href={props.href} target="_blank" rel="noreferrer" className={catalogItem()}>
      <Avatar src={props.avatarSrc} size={48} />
      <span className={catalogItem('title')}>{props.title}</span>
      <span className={catalogItem('value')}>{props.value}</span>
    </a>
  );
}