import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Route, router } from "expo-router";
import Button from "@/components/Button";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Disaster response mesh network</Text>
        <Text style={styles.subtitle}>Secure. Reliable. Connected.</Text>
        <Text style={styles.subtitle}>Building a stronger response network when it matters most.</Text>
        </View>
        <View style={styles.headerImageContainer}>
          <Image
            source={require('../../assets/images/disaster_mesh_mobile_banner_200px.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />

        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/(message)/sendMessage")}>
          <Text style={styles.buttonText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={() => router.push("/(message)/receivedMessage")}>
          <Text style={styles.buttonText}>View messages</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={() => router.push("/(message)/location")}>
          <Text style={styles.buttonText}>View location</Text>
        </TouchableOpacity> 
        <TouchableOpacity style={[styles.button, { marginTop: 16 }]} onPress={() => router.push("/(message)/nodeStatus")}>
          <Text style={styles.buttonText}>View node status</Text>
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
  header: {
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#313131",
    marginBottom: 8,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",


  },
  subtitle: {
    fontSize: 16,
    color: "#888888",
    textAlign: "center",
  },
  headerImageContainer: {
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: "100%",
    height: 200,
    // backgroundColor: "#ffffff",
    marginBottom: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: "#424242",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});
