import React from 'react'
import { Container, Grid, Header, Icon } from 'semantic-ui-react'
import './content.css'

const Content = () => {
  return (
    <Container id="home-content">
      <Grid columns={3} stackable divided>
        <Grid.Row>
          <Grid.Column>
            <Header as='a' href="https://www.strath.ac.uk/">
              <Header as="h2">
                <Icon name='student'/>
                <Header.Content>
                  University of Strathclyde
                </Header.Content>
              </Header>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              Course
              <Header.Subheader>
                Computer and Electronic Systems
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column>
            <Header as='h2'>
              Classification
              <Header.Subheader>
                BEng 1st
              </Header.Subheader>
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Content