"use client";

import { Legend, Pie, PieChart as PieRecharts } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartConfig = {} satisfies ChartConfig;

interface PieChartProps {
  months: number;
  installment: number;
}

export function PieChart({ months, installment }: PieChartProps) {
  const data = Array.from({ length: months }).map((item, idx) => ({
    payment: installment,
    fill: `var(--chart-${idx + 1})`,
  }));

  const month_list = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
    "November",
    "December",
  ];

  return (
    <Card className="flex flex-col p-4 w-full min-w-lg">
      <CardHeader className="items-center pb-0">
        <CardTitle>CSN - Årsbelopp</CardTitle>
        <CardDescription>Se din månadskostnad</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 w-full pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieRecharts>
            <Pie
              innerRadius={40}
              data={data}
              dataKey="payment"
              label
              style={{ fontSize: "10px" }}
            />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="left"
              formatter={(value) => (
                <span className="inline-flex mb-2 text-black">
                  {month_list[value]}
                </span>
              )}
            />
          </PieRecharts>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
