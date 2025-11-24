import { BarChart } from "react-native-chart-kit";

export const BarChartBox = ({ data, labels, width, height, theme }: any) => (
  <BarChart
    data={{ labels, datasets: [{ data }] }}
    width={width}
    height={height}
    yAxisLabel=""
    yAxisSuffix=""
    chartConfig={{
      backgroundGradientFrom: theme.card,
      backgroundGradientTo: theme.card,
      color: () => theme.primary,
      labelColor: () => theme.text,
      propsForBackgroundLines: { strokeWidth: 0 },
    }}
    showValuesOnTopOfBars
  />
);
