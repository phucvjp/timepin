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
import TuyenNgonDocLap from "./pages/TuyenNgonDocLap";
import ChienDichDienBienPhu from "./pages/ChienDichDienBienPhu";
import ExhibitionScreen from "./pages/Exhibition";
import NotFound from "./pages/NotFound";
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
              <Route
                path="/chien-dich-dien-bien-phu"
                element={<ChienDichDienBienPhu />}
              />
              <Route path="/tuyen-ngon-doc-lap" element={<TuyenNgonDocLap />} />
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

            <Route path="/exhibition" element={<ExhibitionScreen />} />
            {/* Catch-all route for 404 */}
            <Route
              element={
                <>
                  <Navigation />
                  <Outlet />
                </>
              }
            >
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>

          <footer className="footer">
            <p>© 2025 TimePin — Khơi dậy niềm tự hào dân tộc</p>
          </footer>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
