import { useLocation } from "react-router-dom";
import SidebarLayout from "./SidebarLayout";
import LoginLayout from "./LoginLayout";

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebarRoutes = ["/search", "/collection", "/profile", "/logout"];
  const showLoginRoutes = ["/login"];
  const showSidebar = showSidebarRoutes.includes(location.pathname);
  const showLoginLayout = showLoginRoutes.includes(location.pathname);

  return (
    <div style={styles.layout}>
      {showSidebar && <SidebarLayout />}
      {showLoginLayout && <LoginLayout />}
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  layout: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
  },
};

export default Layout;
