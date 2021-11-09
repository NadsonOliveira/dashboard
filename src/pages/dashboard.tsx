import { Header } from "../components/form/Header";
import dynamic from "next/dynamic";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { SideBar } from "../components/form/SideBar";

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
const options = {
  chart: {
    toolbar: {
      show: false,
    },

    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },

  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },
    legend: {
      horizontalAlign: "left",
    },

    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2021-11-08T00:00:00.000Z",
      "2021-11-09T00:00:00.000Z",
      "2021-11-010T00:00:00.000Z",
      "2021-11-011T00:00:00.000Z",
      "2021-11-012T00:00:00.000Z",
      "2021-11-0813T00:00:00.000Z",
      "2021-11-014T00:00:00.000Z",
    ],
  },
};
const series = [{ name: "series1", data: [31, 120, 10, 28, 61, 18, 109] }];
export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8} pb="4">
            <Text fontSize="lg" mg="4">
              Inscritos da semana
            </Text>

            <Chart options={options} series={series} type="area" h={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mg="4">
              Taxa de abertura
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
