import { PieChart } from "react-native-chart-kit";

export const PieChartBox = ({ data, width, height, theme }: any) => (
  <PieChart
    data={data.map((item: any) => ({
      ...item,
      legendFontColor: theme.text,
    }))}
    width={width}
    height={height}
    accessor="population"
    backgroundColor="transparent"
    paddingLeft="10"
    chartConfig={{
      backgroundGradientFrom: theme.card,
      backgroundGradientTo: theme.card,
      color: () => theme.primary,
      labelColor: () => theme.text,
    }}
  />
);
