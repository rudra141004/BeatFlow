import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SearchResults = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Results</Text>
      <Text style={styles.subtitle}>No results found yet!</Text>
      <Button
        title="Back to Homepage"
        onPress={() => navigation.navigate("Homepage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default SearchResults;
