import { Outlet } from "react-router";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
