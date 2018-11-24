import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ButtonExampleAnimated = () => (
  <div className="info">
    <Button animated>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
)

export default ButtonExampleAnimated