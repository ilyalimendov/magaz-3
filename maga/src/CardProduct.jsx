export function CardProduct({ item }) {
  return (
    <div>
      <div className="card-closed">
        <div className="card-field">
          <div className="card">
            <img src={item.image} alt="фото продуктов" />
          </div>
          <b style={{ fontSize: "25px" }}>{`${item.price} RUB`}</b>
          <p>{item.title}</p>
          <div className="button-and-svg">
            <button>Заказать</button>

            <svg
              className="card-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="red"
              width="24px"
              height="24px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21.35l-1.45-1.32C5.4 15.47 2 12.05 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.55-3.4 6.97-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>
        <div className="card-field-info">
          <p>{`Описание товара - ${item.description}`}</p>
          <p>{`Рейтинг товара: ${item.rating.rate}`}</p>
        </div>
      </div>
    </div>
  );
}
