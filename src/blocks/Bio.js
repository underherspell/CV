import React from 'react'
import { Container, Header } from 'semantic-ui-react'


const Bio = ({text}) => (
 <Container textAlign='justified' text>
 <Header as='h2'>Teskt</Header>
    <div>
       {text}
    </div>
   </Container>
)

export default Bio