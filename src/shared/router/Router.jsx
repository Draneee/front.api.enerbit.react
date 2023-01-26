import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { Login } from "../../modules/auth/infrastructure/Login";
import InventoryAdministration from "../../modules/inventoryAdministration/infrastructure";
import Layout from "./Layout";
import { ProtectRoute } from "./ProtectRoute";
const Main = () => {
  const ContentRouter = () => (
    <Layout>
      <Outlet />
    </Layout>
  );
  return (
    <Routes>
      <Route path="/auth/" element={<ContentRouter />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectRoute />}>
        <Route path="/administracion/" element={<ContentRouter />}>
          <Route path="inventario" element={<InventoryAdministration />} />
        </Route>
      </Route>
      <Route path="/" element={<Navigate to={"/auth/login"} replace />} />
    </Routes>
  );
};
export default Main;
