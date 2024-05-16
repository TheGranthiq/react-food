import Index from "views/Index.js";
import CustomerForm from "views/pages/CustomerForm.js";
import ProductForm from "views/pages/ProductForm.js";
import CartPage from "views/pages/CartPage.js";
import TransactionHistory from "views/pages/TransactionHistory.js";


var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: <Index />,
    layout: "/admin",
  },
  {
    path: "/customer",
    name: "Customer",
    icon: "ni ni-circle-08 text-pink",
    component: <CustomerForm />,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Product",
    icon: "ni ni-box-2 text-blue",
    component: <ProductForm />,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Cart",
    icon: "ni ni-cart text-orange",
    component: <CartPage />,
    layout: "/admin",
  },
  {
    path: "/transaction-history",
    name: "Transaction History",
    icon: "ni ni-money-coins text-yellow",
    component: <TransactionHistory />,
    layout: "/admin",
  },
];
export default routes;
