import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type BestSeller = {
  name: string;
  imageUrl: string;
  model: string;
  unitsSold: number;
};

interface Props {
  products: BestSeller[];
}

const BestSellingProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="p-8 shadow-xl w-full">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Best Selling Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="flex items-center gap-4 p-4 shadow-md rounded-none">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-24 h-24 object-cover "
            />
            <CardContent className="flex flex-col justify-between p-0">
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-muted-foreground mb-1">Model: {product.model}</p>
              <Badge className="w-fit text-xs bg-rose-500">Units Sold: {product.unitsSold}</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestSellingProducts;
