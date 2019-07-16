import React from 'react'
import './masthead.css'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Segment
} from 'semantic-ui-react'

const Masthead = () => {
  return (
    <Segment id='masthead' inverted>
      <Container id='masthead-container'>
        <Grid id='masthead-grid' columns={'equal'} divided>
          <Grid.Column>
            <Header as='h1' inverted>
              <span className='name'>Colin Cheung</span>
            </Header>
            <Header as='h3' inverted>
              <span>A React Playground</span>
            </Header>
            <div className='ui hidden divider' />
            <Button
              color='linkedin'
              as='a'
              href='https://www.linkedin.com/in/colin-cheung/'
            >
              <Icon name='linkedin' /> LinkedIn
            </Button>
          </Grid.Column>
          <Grid.Column
            className='right-column'
            only='computer'
            textAlign='right'
          >
            <div className='bottom-aligned right-aligned'>
              <Header as='h3' inverted>
                Created using Semantic UI React
                <Image
                  id='semantic-ui-logo'
                  src={process.env.PUBLIC_URL + '/semantic-ui.png'}
                  as='a'
                  size='mini'
                  href='https://github.com/Semantic-Org/Semantic-UI-React'
                  target='_blank'
                />
              </Header>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  )
}

export default Masthead
