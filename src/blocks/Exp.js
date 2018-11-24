import React from 'react'
import { Grid } from 'semantic-ui-react'


  const Exp = ({items}) => (
  <Grid>
    {
        items.map((items, index) => (
            <Grid.Row>
                <Grid.Column width={4}>
                    {items.title}
                </Grid.Column>
                <Grid.Column width={3}>
                    {items.description}
                </Grid.Column>
                <Grid.Column width={3}>
                    {items.from}
                </Grid.Column>
                <Grid.Column width={3}>
                    {items.to}
                </Grid.Column>
            </Grid.Row>
            )
        )
    }
    </Grid>
)
  export default Exp