import React, { useState } from "react";
import { Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";

export const AreaChartBox = ({ data, labels, width, height, theme }: any) => {
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
          color: () => theme.primary,
          labelColor: () => theme.text,
          propsForBackgroundLines: { strokeWidth: 0 },
        }}
        bezier
        onDataPointClick={(point) => {
          if (tooltip && tooltip.x === point.x && tooltip.y === point.y) {
            setTooltip(null);
          } else {
            setTooltip({ x: point.x, y: point.y, value: point.value });
          }
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
          <Text style={{ color: theme.text, fontSize: 10 }}>{tooltip.value}</Text>
        </View>
      )}
    </View>
  );
};
