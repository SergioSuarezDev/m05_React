import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Grid } from 'semantic-ui-react';
import ListItemImg from './ListItemImg';
import config from '../../config/config';

class ListItem extends Component {
  render() {
    return (
      <Grid.Column>
        <Card href={config.BASE + '/movie/' + this.props.info.id} color='black'>
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

ListItem.propTypes = {
    info: PropTypes.shape({
      id: PropTypes.number,
      poster_path: PropTypes.string,
      title: PropTypes.string,
      release_date: PropTypes.string,
      popularity: PropTypes.number,
      vote_count: PropTypes.number,
      vote_average: PropTypes.number
    })
};

export default ListItem;
