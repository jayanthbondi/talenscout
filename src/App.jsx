import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/SearchPage";
import CollectionPage from "./pages/CollectionPage";
import ProfilePage from "./pages/ProfilePage";
import SavedSearchesPage from "./pages/SavedSearchesPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import getTheme from "./theme/theme";
import "./App.css";

const App = () => {
  const theme = createTheme(getTheme("light"));
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/saved-searches" element={<SavedSearchesPage />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </Router>
  );
};

export default App;
