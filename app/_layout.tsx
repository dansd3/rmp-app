import { Tabs, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from "react";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" hidden={false} />
      <Stack
        screenOptions={{
          animation: 'none', 
          headerShown: false,
         
        }}
      >
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="place" options={{ headerShown: false }} />
      </Stack>
      
      
    </>
  );
}
