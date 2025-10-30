"use client";

import { Pie, PieChart } from "recharts";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

export const description = "A pie chart with a custom label";

const chartData = [
  { estimate: "상품 탐색 불편", count: 57, fill: "var(--color-chrome)" },
  { estimate: "상품 불만족", count: 44, fill: "var(--color-safari)" },
  { estimate: "과도한 선택지", count: 17, fill: "var(--color-firefox)" },
  { estimate: "비합리적인 가격", count: 47, fill: "var(--color-edge)" },
];

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))", // ✅ hsl()로 감싸줍니다.
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function ChartContents() {
  return (
    <>
      <div className="w-full mt-[8px] flex flex-col items-center">
        <CardTitle>카테고리별 고객 수</CardTitle>
        <CardDescription>2025/10/31</CardDescription>
      </div>

      <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[200px] px-0">
        <PieChart>
          <ChartTooltip content={<ChartTooltipContent nameKey="count" hideLabel />} />
          <Pie data={chartData} dataKey="count" labelLine={false} nameKey="estimate" />
        </PieChart>
      </ChartContainer>
    </>
  );
}
