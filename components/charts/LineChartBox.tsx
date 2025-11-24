import React from "react";
import { LineChart } from "react-native-chart-kit";

export const LineChartBox = ({ data, labels, width, height, theme }: any) => (
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
  />
);
