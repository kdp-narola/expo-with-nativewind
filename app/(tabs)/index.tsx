import { Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-gray-100">
      <StatusBar style="light" />
      
      <ScrollView className="flex-1">
        {/* Header with Solid Color */}
        <View className="bg-blue-600 pt-16 pb-8 px-6">
          <Text className="text-4xl font-bold text-white mb-2">
            NativeWind + Expo
          </Text>
          <Text className="text-lg text-blue-100">
            Tailwind CSS for React Native
          </Text>
        </View>

        {/* Content */}
        <View className="p-6">
          {/* Card 1 */}
          <View className="bg-white rounded-xl p-6 mb-4 shadow-lg">
            <Text className="text-2xl font-bold text-gray-800 mb-2">
              ✅ Platform Support
            </Text>
            <Text className="text-gray-600 mb-4">
              Works seamlessly on Web, iOS, and Android
            </Text>
            <View className="flex-row gap-2 flex-wrap">
              <View className="bg-blue-500 px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">Web</Text>
              </View>
              <View className="bg-green-500 px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">iOS</Text>
              </View>
              <View className="bg-purple-500 px-4 py-2 rounded-lg">
                <Text className="text-white font-semibold">Android</Text>
              </View>
            </View>
          </View>

          {/* Card 2 */}
          <View className="bg-white rounded-xl p-6 mb-4 shadow-lg">
            <Text className="text-2xl font-bold text-gray-800 mb-2">
              🎨 Tailwind Classes
            </Text>
            <Text className="text-gray-600">
              Use all your favorite Tailwind utility classes
            </Text>
          </View>

          {/* Card 3 with Solid Color */}
          <View className="bg-orange-500 rounded-xl p-6 mb-4">
            <Text className="text-2xl font-bold text-white mb-2">
              🚀 Hot Reload
            </Text>
            <Text className="text-white">
              Instant updates during development
            </Text>
          </View>

          {/* Buttons */}
          <View className="gap-3">
            {/* Primary Button */}
            <View className="bg-blue-600 rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">
                Primary Button
              </Text>
            </View>
            
            {/* Success Button */}
            <View className="bg-green-600 rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">
                Success Button
              </Text>
            </View>
            
            {/* Secondary Button */}
            <View className="bg-gray-200 rounded-lg p-4 items-center">
              <Text className="text-gray-800 font-bold text-lg">
                Secondary Button
              </Text>
            </View>
            
            {/* Outline Button */}
            <View className="border-2 border-blue-600 rounded-lg p-4 items-center">
              <Text className="text-blue-600 font-bold text-lg">
                Outline Button
              </Text>
            </View>

            {/* Danger Button */}
            <View className="bg-red-600 rounded-lg p-4 items-center">
              <Text className="text-white font-bold text-lg">
                Danger Button
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}