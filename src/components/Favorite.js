import React from 'react';
import {Link} from 'react-router-dom';

function Favorite ({person, favorite_thing, id}) {//we passed in these props on DisplayFavorites with a key of favorite.id and passed in the objects params(person favorite_thing, id)
    return (
      <Link to={`/single/${id}`}>
        <h3>{person}</h3>
        <h4>{favorite_thing}</h4>{
          //we are returning the person and their favorite_thing on the screen, that if clicked,
          // will send the user to the /single(id) page where ID is the id of the thing you clicked.
        }</Link>
    )
}

export default Favorite;