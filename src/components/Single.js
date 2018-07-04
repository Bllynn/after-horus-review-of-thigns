import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Single extends Component {//
  constructor() {
    super()
    this.state = {
      favorite: {}
    }
  }
  // this runs once after the first render, but only once
  componentDidMount() {
    this.updateData()
  }
  // this will run everytime after props changes
  componentWillReceiveProps(nextProps) {
    this.updateData()
  }

   updateData = async () => {
    const {data: favorite} = await axios.get(`/singleFavorite/${this.props.match.params.id}`)
    this.setState({favorite})
  }

  render() {
    console.log(this.state);
    return (
      <div>
      <Link to='/'><button>Go Back</button></Link>
        <h1>{this.state.favorite.person}</h1>
        <h2>{this.state.favorite.favorite_thing}</h2>
        <div className="img">
          <img src={this.state.favorite.img} alt={this.state.favorite.favorite_thing}/>
        </div>
      </div>
    )
  }
}

export default Single;