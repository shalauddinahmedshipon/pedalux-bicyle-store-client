import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#a28fd0", "#f67280"];

type CategorySalesData = {
  category: string;
  sales: number;
};

interface Props {
  data: CategorySalesData[];
}

const CategorySalesPieChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-96 pb-16 p-4 shadow-xl my-12 ">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Sales by Category</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="sales"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={120}
            fill="#8884d8"
            label={({ category, sales }: any) => `${category}: $${sales.toFixed(2)}`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategorySalesPieChart;
