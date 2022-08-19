import React, { useState } from "react";

const TrCard = ({ el,dl,tl }) => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(el.price)
  function addPrice() {
    setQuantity(quantity + 1)
    setTotal(total+el.price)
    tl(el.price)
  }function moinPrice() {
    setQuantity(quantity - 1)
    setTotal(total-el.price)

  }
  return (
    <tr>
      <td>{el.title}</td>
      <td>
        <img src={el.img} alt="" width="100px" height="100px" />
      </td>
      <td>
        <button
          onClick={() =>
            quantity < el.qte
              ? addPrice()
              : alert(`you reach the maximum quantity : ${el.qte}`)
          }
        >
          +
        </button>{" "}
        <p>{quantity}</p>
        <button
          onClick={() => (quantity > 1 ? moinPrice() : null)}
        >
          -
        </button>
      </td>
      <td>{el.price}</td>
      <td>{total}</td>
      <td>
        <button onClick={()=>dl(el.id)}>X</button>
      </td>
    </tr>
  );
};

export default TrCard;
