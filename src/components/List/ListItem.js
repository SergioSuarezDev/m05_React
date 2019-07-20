import React, { Component } from 'react';
import { Card, Grid } from 'semantic-ui-react';
import ListItemImg from './ListItemImg';
import {Link} from 'react-router-dom';

class ListItem extends Component {
  render() {
    return (
      <Grid.Column>
        <Link key={this.props.info.id} to={'/movie/' + this.props.info.id}>
          <Card color='black'>
            <ListItemImg poster_path={this.props.info.poster_path}/>
            <Card.Content>
              <Card.Header>
                {this.props.info.title}
              </Card.Header>
            </Card.Content>
          </Card>
        </Link>

      </Grid.Column>
    );
  }
}


export default ListItem;
