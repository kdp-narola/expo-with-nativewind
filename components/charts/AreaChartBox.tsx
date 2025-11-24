import { LineChart } from "react-native-chart-kit";

export const AreaChartBox = ({ data, labels, width, height, theme }: any) => (
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
  />
);
