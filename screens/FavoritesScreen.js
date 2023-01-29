import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";

function FavoritesScreen() {
  // favCtx = useContext(FavoritesContext);
  const favMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const favoriteMeals = MEALS.filter((meal) => favMealIds.includes(meal.id));

  // const favoriteMeals = MEALS.filter((meal) => favCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You have no favorite meals</Text>
      </View>
    );
  } else {
    return <MealsList items={favoriteMeals} />;
  }
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    padding: 8,
  },
});
