import React, { Component  } from 'react';
import { Image } from 'semantic-ui-react';
import config from '../../config/config';


class ListItemImg extends Component  {
  render() {
    const url = 'https://image.tmdb.org/t/p/w500';
    const no = config.no_photo;

    return (
      <Image src={this.props.poster_path ? url + this.props.poster_path : no} />
    );
  }
}


export default ListItemImg;
