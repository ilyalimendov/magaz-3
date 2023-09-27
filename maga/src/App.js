import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import BasketPage from "./Pages/BasketPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/basketpage" element={<BasketPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
