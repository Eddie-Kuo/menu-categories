import { View, Text, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

function MealsListScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals List Screen</Text>
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
