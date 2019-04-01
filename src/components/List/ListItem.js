import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import ListItemImg from './ListItemImg';

class ListItem extends Component {
  render() {
    return (
      <Grid.Column>
        <Card href={'/movie/' + this.props.info.id} color='black'>
          <ListItemImg poster_path={this.props.info.poster_path}/>
          <Card.Content>
            <Card.Header>
              {this.props.info.title}
            </Card.Header>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}


export default ListItem;
