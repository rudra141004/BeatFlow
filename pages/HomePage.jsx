import React, { useState } from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

const RecentlyPlayedItem = ({ imageUrl, title, artist }) => (
  <TouchableOpacity style={styles.recentlyPlayedItem}>
    <Image source={{ uri: imageUrl }} style={styles.recentlyPlayedImage} />
    <Text style={styles.recentlyPlayedTitle} numberOfLines={1}>{title}</Text>
    <Text style={styles.recentlyPlayedArtist} numberOfLines={1}>{artist}</Text>
  </TouchableOpacity>
);

const PlaylistItem = ({ imageUrl, name }) => (
  <TouchableOpacity style={styles.playlistItem}>
    <Image source={{ uri: imageUrl }} style={styles.playlistImage} />
    <Text style={styles.playlistName} numberOfLines={2}>{name}</Text>
  </TouchableOpacity>
);

export default function HomeScreen() {
  const [mood, setMood] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleMoodSubmit = () => {
    // In a real app, this would call an API to get recommendations
    // For now, we'll just set some mock data
    setRecommendations([
      { id: '1', title: 'Happy Vibes', artist: 'Various Artists' },
      { id: '2', title: 'Chill Mood', artist: 'Relaxation Experts' },
      { id: '3', title: 'Energetic Beats', artist: 'Workout Crew' },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Good evening</Text>
      </View>

      <View style={styles.moodInputSection}>
        <Text style={styles.moodInputLabel}>How are you feeling today?</Text>
        <TextInput
          style={styles.moodInput}
          placeholder="Enter your mood (e.g., happy, relaxed, energetic)"
          placeholderTextColor="#b3b3b3"
          value={mood}
          onChangeText={setMood}
        />
        <TouchableOpacity style={styles.moodSubmitButton} onPress={handleMoodSubmit}>
          <Text style={styles.moodSubmitButtonText}>Get Recommendations</Text>
        </TouchableOpacity>
      </View>

      {recommendations.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended for your mood</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendations.map((item) => (
              <RecentlyPlayedItem 
                key={item.id}
                imageUrl={`https://picsum.photos/150?random=${item.id}`}
                title={item.title}
                artist={item.artist}
              />
            ))}
          </ScrollView>
        </View>
      )}

      <View style={styles.quickPlaySection}>
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <TouchableOpacity key={item} style={styles.quickPlayItem}>
            <Image source={{ uri: `https://picsum.photos/100?random=${item}` }} style={styles.quickPlayImage} />
            <Text style={styles.quickPlayText} numberOfLines={1}>Quick Play {item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recently played</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((item) => (
            <RecentlyPlayedItem 
              key={item}
              imageUrl={`https://picsum.photos/150?random=${item}`}
              title={`Recently Played ${item}`}
              artist={`Artist ${item}`}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Made for you</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4, 5].map((item) => (
            <PlaylistItem 
              key={item}
              imageUrl={`https://picsum.photos/150?random=${item + 10}`}
              name={`Your Mix ${item}`}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
  moodInputSection: {
    padding: 16,
    backgroundColor: '#282828',
    marginBottom: 16,
  },
  moodInputLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 8,
  },
  moodInput: {
    backgroundColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    color: '#000000',
    fontSize: 16,
    marginBottom: 8,
  },
  moodSubmitButton: {
    backgroundColor: '#1DB954',
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  moodSubmitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  quickPlaySection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 16,
  },
  quickPlayItem: {
    width: '48%',
    height: 56,
    backgroundColor: '#282828',
    borderRadius: 4,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  quickPlayImage: {
    width: 56,
    height: 56,
  },
  quickPlayText: {
    color: 'white',
    marginLeft: 8,
    flex: 1,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentlyPlayedItem: {
    marginRight: 16,
    width: 140,
  },
  recentlyPlayedImage: {
    width: 140,
    height: 140,
    borderRadius: 4,
  },
  recentlyPlayedTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  recentlyPlayedArtist: {
    color: '#b3b3b3',
    fontSize: 12,
    marginTop: 4,
  },
  playlistItem: {
    marginRight: 16,
    width: 140,
  },
  playlistImage: {
    width: 140,
    height: 140,
    borderRadius: 4,
  },
  playlistName: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  recommendationItem: {
    marginRight: 16,
    width: 140,
  },
});

