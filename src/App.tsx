import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CachMangThangTam from "./pages/CachMangThangTam";
import "./App.css";
import FloatingNavigation from "./components/FloatingNavigation";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route
              element={
                <>
                  <Navigation />
                  <Outlet />
                </>
              }
            >
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Route>
            <Route
              element={
                <>
                  <FloatingNavigation />
                  <Outlet />
                </>
              }
            >
              <Route
                path="/cach-mang-thang-tam"
                element={<CachMangThangTam />}
              />
            </Route>
          </Routes>

          <footer className="footer">
            <p>
              &copy; 2025 TimePin. Connecting history and youth through QR
              stories.
            </p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
