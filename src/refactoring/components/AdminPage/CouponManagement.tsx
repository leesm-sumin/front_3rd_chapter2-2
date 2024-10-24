import { AddCoupon } from "./AddCoupon";
import { CurrentCouponList } from "./CurrentCouponList";
import { Coupon } from "../../../types";

type CouponManagement_t = {
  coupons: Coupon[];
  onCouponAdd: (newCoupon: Coupon) => void;
};

export const CouponManagement = ({ coupons, onCouponAdd }: CouponManagement_t) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">쿠폰 관리</h2>
      <div className="bg-white p-4 rounded shadow">
        <AddCoupon onCouponAdd={onCouponAdd} />
        <CurrentCouponList coupons={coupons} />
      </div>
    </div>
  );
};
