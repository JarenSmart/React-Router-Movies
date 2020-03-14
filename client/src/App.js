import React, { useState } from "react";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import SavedList from "./Movies/SavedList";
import { Route } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:itemid"
        render={props => {
          return <Movie items={savedList} {...props} />;
        }}
      />
    </div>
  );
};

export default App;
