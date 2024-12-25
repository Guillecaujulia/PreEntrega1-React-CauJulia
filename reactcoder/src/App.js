import { BrowserRouter, Route, Routes } from "react-router-dom";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import HomePageOne from "./pages/HomePageOne";
import CartPage from "./pages/CartPage";
import PhosphorIconInit from "./helper/PhosphorIconInit";
function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <PhosphorIconInit />

      <Routes>
        <Route exact path='/' element={<HomePageOne />} />
  
        
        <Route exact path='/cart' element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
