import { FlatList } from 'react-native';
import CategoryTile from '../components/CategoryTile';
import { CATEGORIES } from '../data/dummy-data';

function renderCategoryItem(itemData) {
  return (
    <CategoryTile title={itemData.item.title} color={itemData.item.color} />
  );
}

function CategoriesScreen() {
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
