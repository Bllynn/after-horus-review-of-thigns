import React, { Component } from 'react';
import DisplayFavorites from './DisplayFavorites'

function Home() {//this functional component is used for the sole purpose of having a place to displayFavorites.(allows CSS easier)
    return (
      <div>
        <h1>THESE ARE TJe FAVOREITES</h1>
        <DisplayFavorites />
      </div>
    )
}

export default Home;