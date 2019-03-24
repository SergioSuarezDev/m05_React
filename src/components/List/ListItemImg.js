import React, { Component  } from 'react';
import PropTypes from 'prop-types';
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

ListItemImg.propTypes = {
  poster_path: PropTypes.string
};

export default ListItemImg;
