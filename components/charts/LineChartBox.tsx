import React, { useState } from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const LineChartBox = ({ data, labels, width, height, theme }: any) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: number } | null>(null);

  return (
    <View>
      <LineChart
        data={{ labels, datasets: [{ data }] }}
        width={width}
        height={height}
        chartConfig={{
          backgroundGradientFrom: theme.card,
          backgroundGradientTo: theme.card,
          decimalPlaces: 2,
          color: (opacity = 1) =>
            theme.chartLine?.replace("1)", `${opacity})`) || `rgba(79, 70, 229, ${opacity})`,
          labelColor: () => theme.text,
          propsForDots: { r: "5", stroke: theme.primary, strokeWidth: 2 },
          propsForBackgroundLines: { strokeWidth: 0 },
        }}
        bezier
        onDataPointClick={(point) => {
          setTooltip({
            x: point.x,
            y: point.y,
            value: point.value,
          });
        }}
      />

      {tooltip && (
        <View
          style={{
            position: "absolute",
            left: tooltip.x + 10,
            top: tooltip.y - 30,
            backgroundColor: theme.card,
            padding: 4,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: theme.primary,
          }}
        >
          <Text style={{ color: theme.text, fontSize: 10 }}>
            {tooltip.value}
          </Text>
        </View>
      )}
    </View>
  );
};
