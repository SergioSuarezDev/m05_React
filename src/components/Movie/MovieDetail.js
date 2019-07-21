import React, { Component } from 'react';
import { Grid, Button, Dropdown, Header, Icon, Label, Segment } from 'semantic-ui-react';
import StarRatingComponent from 'react-star-rating-component';
import Storage  from '../Storage'



class MovieDetail extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      rating: 1,
      options: [],
      selectedOptions: []
    };

  }

  componentDidMount(){

    const options = [];
    const collections = Storage.loadCollections();

    Object.entries(collections.Peliculas).map(([key, value]) => (
      options.push( {
        key: collections.Peliculas[key].Coleccion, 
        text: collections.Peliculas[key].Coleccion, 
        value: collections.Peliculas[key].Coleccion 
      })))

      this.setState({
        options : options
      }) 

  }

  
  render() {

  let rating;
  const ratings = Storage.loadRatings()
 
  ratings.map((rate) => {
      if(this.props.details.id === rate.id) {
        rating = rate.value
      }
   })

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
          <StarRatingComponent 
            name="rateFilm" 
            starCount={10} value={rating}
            onStarClick={this.onStarClick.bind(this)}
          />       
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
            <Grid.Column>
              <Dropdown onChange={this.handleChange.bind(this)} placeholder='Collections' 
              fluid multiple selection options={this.state.options} /> <br/>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => this.addFilmToColls(this.props.details.id, 
              this.props.details.original_title)}>
              Save to Collection</Button>
            </Grid.Column>
        </Segment>
      </Segment.Group>
    );
  }

  onStarClick(nextValue, prevValue, name) {


    let ratingsSaved = Storage.loadRatings()

    if(ratingsSaved.length > 0) {
      ratingsSaved.map((rate, i) => {
        console.log(rate)
        let actualRating = ratingsSaved.filter((rate) =>  { 
              
          return rate.id === this.props.details.id }
        );

        if(actualRating.length !== 0) {
          rate.value = nextValue
          this.setState({rating: nextValue});
        } else { 
          ratingsSaved.push({id : this.props.details.id, value : nextValue })
        }
      });
      
    } 

    Storage.setRatings(ratingsSaved)

  }

  handleChange(event, data) {
    this.setState({
      selectedOptions : data.value
    }) 
  }


  addFilmToColls(id, titulo){
    Storage.addFilmtoCollections(id, titulo, this.state.selectedOptions)
  }

}

export default MovieDetail;
