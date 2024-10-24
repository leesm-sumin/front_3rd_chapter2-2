import { Coupon, Product } from "../../types.ts";
import { ProductManagement } from "./AdminPage/ProductManagement.tsx";
import { CouponManagement } from "./AdminPage/CouponManagement.tsx";

interface Props {
  products: Product[];
  coupons: Coupon[];
  onProductUpdate: (updatedProduct: Product) => void;
  onProductAdd: (newProduct: Product) => void;
  onCouponAdd: (newCoupon: Coupon) => void;
}

export const AdminPage = ({ products, coupons, onProductUpdate, onProductAdd, onCouponAdd }: Props) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">관리자 페이지</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProductManagement products={products} onProductAdd={onProductAdd} onProductUpdate={onProductUpdate} />
        <CouponManagement coupons={coupons} onCouponAdd={onCouponAdd} />
      </div>
    </div>
  );
};
