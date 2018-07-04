import React from 'react';
import {Link} from 'react-router-dom';

function Favorite ({person, favorite_thing, id}) {
    return (
      <Link to={`/single/${id}`}>
        <h3>{person}</h3>
        <h4>{favorite_thing}</h4>
      </Link>
    )
}

export default Favorite;