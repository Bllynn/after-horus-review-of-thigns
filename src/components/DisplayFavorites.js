import React, { Component } from 'react';
import Favorite from './Favorite';
import axios from 'axios';

class DisplayFavorite extends Component {
  constructor() {
    super()

    this.state = {
      favoriteThings: []
    }
  }

  async componentDidMount() {
    const {data: favoriteThings} = await axios.get('/allFavorites')
      this.setState({favoriteThings})
  }

  showFavorites(favorites) {
    return favorites.map(favorite => (
      <Favorite key={favorite.id} {...favorite} />
    ))
  }

  render() {
    return (
      <div>
        {this.showFavorites(this.state.favoriteThings)}
      </div>
    )
  }
}

export default DisplayFavorite;