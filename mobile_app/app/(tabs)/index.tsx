import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Route, router } from "expo-router";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Start building your app here.</Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#007AFF",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 8,
            marginTop: 16,
          }}
          onPress={() => {router.push("/(message)/sendMessage")}}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#000",
  },
});
