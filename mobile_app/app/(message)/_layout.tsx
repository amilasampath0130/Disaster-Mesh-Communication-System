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
      <Stack.Screen
        name="location"
        options={{
          headerShown: true,
          title: "Location",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="nodeStatus"
        options={{
          headerShown: true,
          title: "Node Status",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="setting"
        options={{
          headerShown: true,
          title: "Setting",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
