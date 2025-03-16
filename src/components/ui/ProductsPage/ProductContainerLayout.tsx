import { products } from "@/lib/fake.data";
import { TProduct } from "../homePage/ProductFeatured";
import ProductCard from "@/components/share/ProductCard";


const ProductContainerLayout = () => {
  return (
    <section className="w-full flex mt-24 min-h-screen gap-10">
      {/* lg device  */}
      <aside className="lg:w-1/3  shadow-lg hidden lg:flex bg-white">
        sidebar
      </aside>
      <main className="lg:w-2/3 w-full  shadow-lg pb-10 bg-white">
      <header>
<div className="flex justify-between items-center py-5 px-5">
  <h3 className="text-2xl font-semibold">Product List</h3>
  <div>
    Short by
  </div>
</div>

      </header>
      {/* container  */}
  <div>
  <div className="flex justify-center px-6">
     <div className="grid grid-cols-1 md:grid-cols-3  gap-8 ">
        {products.slice(0,8)?.map((item:TProduct, index:number) => (
          <div key={index}>
            <ProductCard  item={item} />
          </div>
        ))}
      </div>
     </div>
  </div>
      </main>
    </section>
  );
};

export default ProductContainerLayout;