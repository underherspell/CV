import React from 'react'
import { List, Header, Icon } from 'semantic-ui-react'
import "./Info.scss"

const Info = () => (
    <div className="info">
    <Icon name="address card outline" size="big"/>
    <Header as='h2' content='Dane osobowe' />
  <List>
    <List.Item>
      <List.Icon name='calendar' />
      <List.Content>14.01.1853</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='address book' />
      <List.Content>Gliwice, Ulica 123</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='phone' />
      <List.Content>+48535135324</List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name='envelope open outline' />
      <List.Content>
        <a href='mailto:mail@semantic-ui.com'>just@kidding.com</a>
      </List.Content>
    </List.Item>
  </List>
  </div>
)

export default Info