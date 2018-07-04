import React, { Component } from 'react';
import Favorite from './Favorite';
import axios from 'axios';

class DisplayFavorite extends Component {//more or less our App.js.  this is the simple state holder.  top of the pile main display
  constructor() {
    super()

    this.state = {
      favoriteThings: []
    }
  }
//async is a way to avoid a messy '.then()'   we 'await' the return of our axios.get 
  async componentDidMount() {
    const {data: favoriteThings} = await axios.get('/allFavorites')//const{data:favoriteThings} is destructring our data and renaming it favoriteThings.
      this.setState({favoriteThings})//this is setting state to our data that we renamed favoriteThings.  we dont need a favoriteThings.data becuase its destructured off of it already.
  }

  showFavorites(favorites) {
    return favorites.map(favorite => (//this is mapping over favorites and taking the return of that(favorite). 
      <Favorite key={favorite.id} {...favorite} />//were rending the return of our data inside of our Favorite Component(inside the components folder)
    ))
  }

  render() {
    return (//becuase we had data fetched in our componentDidMount(){} we can then return it right away with the function showFavorites(maps over state and returns a <Favorite>
      <div>
        {this.showFavorites(this.state.favoriteThings)}
      </div>
    )
  }
}

export default DisplayFavorite;