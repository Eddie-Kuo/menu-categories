import { View, FlatList, StyleSheet } from 'react-native';
import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsListScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0;
    // return all the meal items in which the property categoryIds[] has the category id - if it doesn't it should return - 1
  });

  function renderMealItem(itemData) {
    return <MealItem title={itemData.item.title} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}
export default MealsListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
