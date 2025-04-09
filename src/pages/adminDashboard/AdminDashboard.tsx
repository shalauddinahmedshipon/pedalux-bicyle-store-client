// components/SalesDashboard.jsx
import { Card, CardContent } from '@/components/ui/card';
import { useGetSalesDashboardQuery } from '@/redux/features/order/orderApi';
import Loader from '@/components/share/Loader';
import SalesMonthChart from '@/components/layout/dashboard/admin/SalesMonthChart';
import CategorySalesPieChart from '@/components/layout/dashboard/admin/SalesCategoryChart';
import BestSellingProducts from '@/components/layout/dashboard/admin/BestSellingProductCard';

export default function AdminDashboard() {
const {data,isLoading}=useGetSalesDashboardQuery(undefined);
console.log(data?.data)
if(isLoading) return <div className="w-full h-full left-[5%] fixed "> <Loader/></div>



  return (
    <div className="space-y-6 mt-10 mx-10">
      {/* Summary Cards */}
      <h3 className="text-2xl font-semibold text-black mb-5">Sales Report</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className='shadow-xl'>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-500">Total Revenue</h3>
            <p className="text-2xl font-bold text-rose-500 mt-2"><span className='text-4xl'>&#2547;</span>{data?.data?.totalRevenue.toLocaleString()}</p>
          </CardContent>
        </Card>

        <Card className='shadow-xl'>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-500">Total Units Sold</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">{data?.data?.totalUnitsSold}</p>
          </CardContent>
        </Card>

        <Card className='shadow-xl'>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-500">Total Customer</h3>
            <p className="text-2xl font-bold text-green-600 mt-2">{data?.data?.totalCustomer}</p>
          </CardContent>
        </Card>
        <Card className='shadow-xl'>
          <CardContent className="p-6 text-center">
            <h3 className="text-lg font-medium text-gray-500">Available in Stock</h3>
            <p className="text-2xl font-bold text-orange-600 mt-2">{data?.data?.availableStock}</p>
          </CardContent>
        </Card>
      </div>

      {/* Sales by Month Chart */}
   <SalesMonthChart data={data?.data?.salesByMonth}/>

{/* Sales by Category Chart */}
<CategorySalesPieChart data={data?.data?.salesByCategory
}/>

   {/* best selling products  */}
   <div className="mb-20">
      <BestSellingProducts products={data?.data?.bestSellingProducts} />
    </div>  
    </div>
  );
}
