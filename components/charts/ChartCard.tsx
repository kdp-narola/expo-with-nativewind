import React from "react";
import { Text, View } from "react-native";

export const ChartCard = ({ title, children, theme }: any) => (
  <View className="w-full rounded-xl p-3 shadow-md" style={{ backgroundColor: theme.card }}>
    <Text className="text-base font-semibold mb-2" style={{ color: theme.text }}>
      {title}
    </Text>
    <View className="items-center">{children}</View>
  </View>
);
