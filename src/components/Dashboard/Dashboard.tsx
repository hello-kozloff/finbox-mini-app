import React from 'react';
import { Card, CardScroll, Group, Header } from '@vkontakte/vkui';

/**
 * The dashboard component.
 *
 * @constructor
 */
export default function Dashboard(): React.ReactElement {
  return (
    <Group header={<Header mode="primary">Активные долги</Header>} mode="plain">
      <CardScroll size="m">
        <Card><div style={{ paddingBottom: '66%' }} /></Card>
        <Card><div style={{ paddingBottom: '66%' }} /></Card>
      </CardScroll>
    </Group>
  )
}