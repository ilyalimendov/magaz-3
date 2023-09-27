import { useNavigate } from "react-router-dom";

function BasketPage() {
  const navigate = useNavigate();

  //-- переключение между страницами
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="basket-container">
      <div className="basket-header">
        <h1>Корзина</h1>
        <button className="basket-button" onClick={handleClick}>
          Вернуться
        </button>
      </div>
      <hr style={{ marginBottom: "30px" }} />
      {/*конструкция else if.  если нет ни одного товара в корзине то выводим сообщение */}
      <div>
        <h2 style={{ textAlign: "center" }}>Вы не добавили ни одного товара</h2>
      </div>
    </div>
  );
}

export default BasketPage;
