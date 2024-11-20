import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }) => (
  <View style={styles.screen}>
    <Text style={styles.title}>Welcome to Music App</Text>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Search')}>
      <Text style={styles.buttonText}>Go to Search</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Playlist')}>
      <Text style={styles.buttonText}>Create Playlist</Text>
    </TouchableOpacity>
  </View>
);

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulating search results
    const mockResults = [
      { id: '1', title: 'Song 1', artist: 'Artist 1' },
      { id: '2', title: 'Song 2', artist: 'Artist 2' },
      { id: '3', title: 'Song 3', artist: 'Artist 3' },
    ];
    setSearchResults(mockResults);
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Search Songs</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter song or artist name"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text style={styles.songTitle}>{item.title}</Text>
            <Text style={styles.artistName}>{item.artist}</Text>
          </View>
        )}
      />
    </View>
  );
};

const PlaylistScreen = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [songName, setSongName] = useState('');
  const [playlist, setPlaylist] = useState([]);

  const addToPlaylist = () => {
    if (playlistName && songName) {
      setPlaylist([...playlist, { id: Date.now().toString(), name: songName }]);
      setSongName('');
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Create Playlist</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter playlist name"
        value={playlistName}
        onChangeText={setPlaylistName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter song name"
        value={songName}
        onChangeText={setSongName}
      />
      <TouchableOpacity style={styles.button} onPress={addToPlaylist}>
        <Text style={styles.buttonText}>Add to Playlist</Text>
      </TouchableOpacity>
      <FlatList
        data={playlist}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.playlistItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const navigation = {
    navigate: (screenName) => setCurrentScreen(screenName),
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home':
        return <HomeScreen navigation={navigation} />;
      case 'Search':
        return <SearchScreen />;
      case 'Playlist':
        return <PlaylistScreen />;
      default:
        return <HomeScreen navigation={navigation} />;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {renderScreen()}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => setCurrentScreen('Home')}>
          <Text style={styles.navButton}>🏠</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Search')}>
          <Text style={styles.navButton}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setCurrentScreen('Playlist')}>
          <Text style={styles.navButton}>🎵</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  resultItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  songTitle: {
    fontWeight: 'bold',
  },
  artistName: {
    color: 'gray',
  },
  playlistItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    width: '100%',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navButton: {
    fontSize: 24,
  },
});

export default App;