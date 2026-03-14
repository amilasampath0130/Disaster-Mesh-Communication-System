import { StyleSheet, Text, View } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.text}> wellcome </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
   justifyContent: "center",
  alignItems: "center",
  },
});
