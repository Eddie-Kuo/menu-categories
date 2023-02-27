import { Text, View, StyleSheet } from 'react-native';

export default function MealDetails({ duration, complexity, affordability }) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>Prep Time: {duration} minutes</Text>
      <Text style={styles.detailItem}>Level: {complexity.toUpperCase()}</Text>
      <Text style={styles.detailItem}>
        Pricing: {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
