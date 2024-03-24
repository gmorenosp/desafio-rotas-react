import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeIndex from "./components/HomeIndex";
import MainBody from "./components/MainBody";
import NoContent from "./components/NoContent";
import About from "./routes/About";
import Home from "./routes/Home";
import Products from "./routes/Products";
import GroupItens from "./routes/Products/GroupItens";
import { getCategories } from "./services/category-service";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<MainBody content={<HomeIndex />} />} />
          <Route path="products" element={<MainBody content={<Products />} />}>
            <Route index element={<Navigate to={getCategories()[0].routerName} />} />
            {getCategories().map(c => <Route key={c.id} path={c.routerName} element={<GroupItens categoryId={c.id} />} />)}
          </Route>
          <Route path="about" element={<MainBody content={<About />} />} />
          <Route path="*" element={<MainBody content={<NoContent />} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}