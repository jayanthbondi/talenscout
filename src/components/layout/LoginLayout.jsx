const LoginLayout = ({ children }) => {
  return <div style={styles.container}>{children}</div>;
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f0f2f5", // Optional: Background color for the login layout
  },
};

export default LoginLayout;
