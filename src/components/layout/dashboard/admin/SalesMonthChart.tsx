import { Card, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const SalesMonthChart = ({data}:{data:any}) => {
  return (
    <Card className='lg:w-4xl md:w-xl sm:w-lg w-[300px] shadow-xl'>
    <CardContent className="p-6">
      <h3 className="text-lg font-medium mb-4 text-gray-700">Sales by Month</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" name="Revenue ($)" fill="#F33A6A" />
          <Bar dataKey="unitsSold" name="Units Sold" fill="blue" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
  );
};

export default SalesMonthChart;