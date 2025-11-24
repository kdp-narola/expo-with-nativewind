import { AreaChartBox } from "@/components/charts/AreaChartBox";
import { BarChartBox } from "@/components/charts/BarChartBox";
import { ChartCard } from "@/components/charts/ChartCard";
import { LineChartBox } from "@/components/charts/LineChartBox";
import { PieChartBox } from "@/components/charts/PieChartBox";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import React from "react";
import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ChartsScreen() {
	const { width } = useWindowDimensions();

	let columns = 1;
	if (width >= 1440) columns = 4;
	else if (width >= 1280) columns = 3;
	else if (width >= 640) columns = 2;
	else columns = 1;

	const padding = width >= 640 ? 32 : 16;
	const chartWidth = (width - padding * (columns + 1)) / columns;
	const chartHeight = Math.min(chartWidth, 300);

	const colorScheme = useColorScheme();
	const theme = Colors[colorScheme ?? "light"];

	return (
		<SafeAreaView className="flex-1" edges={["top"]}>
			<View className="flex-1" style={{ backgroundColor: theme.background }}>
				<Text
					className="text-2xl font-bold px-4 pt-4"
					style={{ color: theme.text }}
				>
					Charts
				</Text>

				<ScrollView className="flex-1 p-4">
					<View className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-5">
						<ChartCard title="📈 Line Chart" theme={theme}>
              <LineChartBox data={[3, 5, 2, 6, 4]} labels={["1", "2", "3", "4", "5"]} width={chartWidth} height={chartHeight} theme={theme} />
            </ChartCard>

            <ChartCard title="📊 Bar Chart" theme={theme}>
              <BarChartBox data={[20, 45, 28, 80, 99, 43]} labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]} width={chartWidth} height={chartHeight} theme={theme} />
            </ChartCard>

            <ChartCard title="🥧 Pie Chart" theme={theme}>
              <PieChartBox data={[{ name: "React", population: 35, color: theme.primary, legendFontColor: theme.text }, { name: "JS", population: 25, color: theme.orange, legendFontColor: theme.text }, { name: "Node", population: 40, color: theme.success, legendFontColor: theme.text}]} width={chartWidth} height={220} theme={theme} />
            </ChartCard>

            <ChartCard title="🖊️ Area Chart" theme={theme}>
              <AreaChartBox data={[2, 5, 1, 3, 7]} labels={["Amroli", "Adajan", "Vesu", "Kosad", "Rander"]} width={chartWidth} height={220} theme={theme} />
            </ChartCard>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}