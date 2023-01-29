import { useState } from "react";
import { createContext } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoriteMealIds, setFavoriteMealId] = useState([]);

  function addFavorite(id) {
    return setFavoriteMealId((currentFevId) => [...currentFevId, id]);
  }

  function removeFavorite(id) {
    return setFavoriteMealId((currentFevId) =>
      currentFevId.filter((mealId) => mealId !== id)
    );
  }
  const value = {
    ids: favoriteMealIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
