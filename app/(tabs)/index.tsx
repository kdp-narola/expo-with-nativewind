import { Colors } from '@/constants/theme';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, useColorScheme, View } from 'react-native';

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <View className="flex-1" style={{ backgroundColor: theme.background }}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />

      <ScrollView className="flex-1">
        <View className="bg-primary dark:bg-blue-800 pt-16 pb-8 px-6">
          <Text className="text-4xl font-bold mb-2 text-white">
            NativeWind + Expo
          </Text>
          <Text className='text-white'>
            Tailwind CSS for React Native
          </Text>
        </View>

        <View className="p-6">
          <View style={{ backgroundColor: theme.card }} className="rounded-xl p-6 mb-4 shadow-lg">
            <Text className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
              ✅ Platform Support
            </Text>
            <Text style={{ color: theme.mutedText }} className="mb-4">
              Works seamlessly on Web, iOS, and Android
            </Text>

            <View className="flex-row gap-2 flex-wrap">
              <View style={{ backgroundColor: theme.primary }} className="px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">Web</Text>
              </View>
              <View style={{ backgroundColor: theme.success }} className="px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">iOS</Text>
              </View>
              <View style={{ backgroundColor: theme.orange }} className="px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">Android</Text>
              </View>
            </View>
          </View>

          <View style={{ backgroundColor: theme.card }} className="rounded-xl p-6 mb-4 shadow-lg">
            <Text className="text-2xl font-bold mb-2" style={{ color: theme.text }}>
              🎨 Tailwind Classes
            </Text>
            <Text style={{ color: theme.mutedText }}>
              Use all your favorite Tailwind utility classes
            </Text>
          </View>

          <View style={{ backgroundColor: theme.orange }} className="rounded-xl p-6 mb-4">
            <Text className="text-2xl font-bold text-white mb-2">
              🚀 Hot Reload
            </Text>
            <Text className="text-white">Instant updates during development</Text>
          </View>

          <View className="gap-3">
            <View style={{ backgroundColor: theme.primary }} className="rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">Primary Button</Text>
            </View>

            <View style={{ backgroundColor: theme.success }} className="rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">Success Button</Text>
            </View>

            <View style={{ backgroundColor: theme.card }} className="rounded-lg p-4 items-center">
              <Text style={{ color: theme.text }} className="font-bold text-lg">
                Secondary Button
              </Text>
            </View>

            <View className="rounded-lg p-4 items-center" style={{ borderColor: theme.primary, borderWidth: 2 }}>
              <Text style={{ color: theme.primary }} className="font-bold text-lg">
                Outline Button
              </Text>
            </View>

            <View style={{ backgroundColor: theme.danger }} className="rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">Danger Button</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
