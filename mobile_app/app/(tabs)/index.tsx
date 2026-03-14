import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Route, router } from "expo-router";
import Button from "@/components/Button";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Home</Text>
        <Text style={styles.subtitle}>Long-Range Communication mesh for  Disaster Response and Relief Coordination</Text>
        </View>
        <Button title="Go to Send Message" onPress={() => router.push("/(message)/sendMessage")} />
        <Button title="Go to find location" onPress={() => router.push("/(message)/location")} />
        <Button title="Go to node status" onPress={() => router.push("/(message)/nodeStatus")} />
        <Button title="Go to settings" onPress={() => router.push("/(message)/setting")} />
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
  header: {
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#000",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",

  },
  subtitle: {
    fontSize: 16,
    color: "#000",
  },

});
