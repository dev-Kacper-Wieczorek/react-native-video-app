import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const categories = ['React Native', 'React', 'TypeScript', 'JavaScript'];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Categories</Text>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.showMoreBtn}>
        <Text style={styles.showMoreText}>Show more →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#eee',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
  },
  showMoreBtn: {
    marginTop: 10,
  },
  showMoreText: {
    color: '#007bff',
    fontWeight: '500',
    fontSize: 16,
  },
});
