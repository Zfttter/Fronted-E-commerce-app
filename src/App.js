import HeaderComponent from "./components/HeaderComponent";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrdersPage from "./pages/user/UserOrdersPage";
import UserCartDetailsPage from "./pages/user/UserCartDetailsPage";
import UserOrderDetailsPage from "./pages/user/UserOrderDetailsPage";
import ProtectedRoutesComponent from "./components/ProtectedRoutesComponent";
import AdminAnalyticsPage from "./pages/admin/AdminAnalyticsPage"; 
import AdminUsersPage from "./pages/admin/AdminUsersPage";  
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";  
import AdminProductsPage from "./pages/admin/AdminProductsPage";  
import AdminEditProductPage from "./pages/admin/AdminEditProductPage";
import RoutesWithUserChatComponent from "./components/user/RoutesWithUserChatComponent";

function App() {
  return (
    <>
      {/* ✅ 确保 HeaderComponent 保留 */}
      <HeaderComponent />

      <Routes>
        {/* ✅ 公开路由 */}
        <Route element={<RoutesWithUserChatComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<div>Page not exists 404</div>} />
        </Route>

        {/* ✅ 用户保护路由 */}
        <Route element={<ProtectedRoutesComponent admin={false} />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrdersPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route path="/user/order-details" element={<UserOrderDetailsPage />} />
        </Route>

        {/* ✅ 管理员保护路由 */}
        <Route element={<ProtectedRoutesComponent admin={true} />}>
          <Route path="/admin/analytics" element={<AdminAnalyticsPage />} />
          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/admin/edit-product" element={<AdminEditProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
