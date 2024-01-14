import "./App.scss";
// react router v6
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import {
  Home,
  CategoryProduct,
  ProductSingle,
  Cart,
  Search,
} from "./pages/index";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Login from "./pages/LoginAndRegister/login";
import Register from "./pages/LoginAndRegister/Register";

import store from "./store/store";
import { Provider } from "react-redux";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Sidebar />
          <Routes>
            {/* Home page route */}
            <Route path="/" element={<Home />} />
            {/* Single product route */}
            <Route path="/product/:id" element={<ProductSingle />} />
            {/* Category wise product listing route */}
            <Route path="/category/:category" element={<CategoryProduct />} />
            {/* cart  */}
            <Route path="/cart" element={<Cart />} />
            {/* Searched Product */}
            <Route path="/search/smartphones" element={<Search />} />
            {/* login and Register */}
            <Route path="/login" element={<Login />}  />
          <Route path="/register" element={<Register />}  />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
