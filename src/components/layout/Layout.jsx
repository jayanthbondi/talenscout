/* eslint-disable react/prop-types */
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div style={styles.layout}>
      <Sidebar />
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
