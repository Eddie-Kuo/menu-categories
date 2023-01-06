import { FlatList } from 'react-native';
import CategoryTile from '../components/CategoryTile';
import { CATEGORIES } from '../data/dummy-data';

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('Meals List', { categoryId: itemData.item.id });
    }
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      //   renderItem gives an itemData object as default with item property
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
