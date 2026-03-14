import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { SafeAreaView ,} from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View >
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color:"white", alignItems:"center",justifyContent:"center" }}>Welcome to the Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
