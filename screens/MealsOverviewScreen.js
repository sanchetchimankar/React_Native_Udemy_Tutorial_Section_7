
import { useLayoutEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native'

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />


}

export default MealsOverviewScreen;

