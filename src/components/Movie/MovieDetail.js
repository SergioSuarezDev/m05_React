import React, { Component } from 'react';
import { Dropdown, Header, Icon, Label, Segment, Rating } from 'semantic-ui-react';

const options = [
  { key: 'uno', text: 'uno', value: 'uno' },
  { key: 'dos', text: 'dos', value: 'dos' },
]

class MovieDetail extends Component {
  render() {
    return (
      <Segment.Group>
        <Segment>
          <Header as='h2' color='black'>
            <Icon name='film' color='black'/>
            <Header.Content>
              {this.props.details.title}
              <Header.Subheader color='black'>
                {this.props.details.original_title}
              </Header.Subheader>
            </Header.Content>
          </Header>
        </Segment>

        <Segment>
          <Header as='h3'>My Rating</Header>
          <Rating icon='star' defaultRating={Math.round(this.props.details.vote_average)} maxRating={10} />       
        </Segment>
          
        <Segment>
          <Header as='h3'>Overview</Header>
          {this.props.details.overview || <i>No Overview</i>}
        </Segment>

        <Segment>
          <Header as='h3'>Genres</Header>
          {(this.props.details.genres && this.props.details.genres.map(
            genre => <Label key={genre.id} color='black'> {genre.name} </Label>)
            ) || <i>No Genres</i>}
        </Segment>

        <Segment>
            <Header as='h3'>Add to Collection</Header>
            <Dropdown placeholder='Collections' fluid multiple selection options={options} />
          </Segment>
  
      </Segment.Group>
    );
  }
}

export default MovieDetail;
