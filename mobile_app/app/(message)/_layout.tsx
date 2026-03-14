import React from "react";
import { Stack } from "expo-router";

export default function GameLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          
        },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="receivedMessage"
        options={{
          headerShown: true,
          title: "Received Message",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="sendMessage"
        options={{
          headerShown: true,
          title: "Send Message",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
