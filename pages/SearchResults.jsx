import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const genres = [
  { id: '1', name: 'Rock', color: '#E91E63' },
  { id: '2', name: 'Pop', color: '#9C27B0' },
  { id: '3', name: 'Hip-Hop', color: '#673AB7' },
  { id: '4', name: 'Jazz', color: '#3F51B5' },
  { id: '5', name: 'Classical', color: '#2196F3' },
  { id: '6', name: 'Electronic', color: '#03A9F4' },
  { id: '7', name: 'R&B', color: '#00BCD4' },
  { id: '8', name: 'Country', color: '#009688' },
];

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== '') {
      setSearchHistory([searchQuery, ...searchHistory.slice(0, 4)]);
      setSearchQuery('');
    }
  };

  const renderGenreItem = ({ item }) => (
    <TouchableOpacity style={[styles.genreItem, { backgroundColor: item.color }]}>
      <Text style={styles.genreText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Search</Text>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Artists, songs, or podcasts"
          placeholderTextColor="#b3b3b3"
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={handleSearchSubmit}
        />
      </View>
      <View style={styles.searchHistoryContainer}>
        <Text style={styles.searchHistoryTitle}>Recent Searches</Text>
        {searchHistory.map((item, index) => (
          <TouchableOpacity key={index} style={styles.searchHistoryItem}>
            <Text style={styles.searchHistoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.browseText}>Browse all</Text>
      <FlatList
        data={genres}
        renderItem={renderGenreItem}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.genreList}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchContainer: {
    margin: 16,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    color: '#000000',
    fontSize: 16,
  },
  browseText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 16,
  },
  genreList: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  genreItem: {
    width: '48%',
    height: 100,
    borderRadius: 4,
    justifyContent: 'flex-end',
    padding: 8,
    marginBottom: 16,
  },
  genreText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchHistoryContainer: {
    padding: 16,
  },
  searchHistoryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  searchHistoryItem: {
    paddingVertical: 8,
  },
  searchHistoryText: {
    color: '#b3b3b3',
    fontSize: 16,
  },
});

