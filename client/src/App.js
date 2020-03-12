import React, { useState } from "react";
import { MovieList, Movie } from "./Movies";
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
    </div>
  );
};

export default App;
