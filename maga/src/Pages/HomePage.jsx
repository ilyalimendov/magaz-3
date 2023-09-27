import { useNavigate } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";
import { CardProduct } from "../CardProduct";

export default function HomePage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/basketpage");
  };

  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setJsonData(data);
    } catch (error) {
      console.error("Ошибка при получении данных с сервера:", error);
    }
  };

  if (!jsonData) {
    return <p>Загрузка данных...</p>;
  }

  const products = jsonData.map((item, index) => (
    <CardProduct key={index} item={item} />
  ));

  return (
    <div>
      <header className="header">
        магазин продуктов
        <button className="header-button" onClick={handleClick}>
          Корзина
        </button>
      </header>
      <section className="section-one">{products}</section>
    </div>
  );
}
