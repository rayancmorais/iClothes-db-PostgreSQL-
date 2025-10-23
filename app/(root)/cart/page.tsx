import CartTable from "./cart-table"; //export default
import { getMyCart } from "@/lib/actions/cart.actions"; //export const or func
export const metadata = {
  title: "Shopping Cart",
};
const CartPage = async () => {
  const cart = await getMyCart();
  return <CartTable cart={cart} />;
};

export default CartPage;
