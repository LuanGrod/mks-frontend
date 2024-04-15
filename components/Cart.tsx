"use client";

import useCart from "@/stores/useCart";

interface CartProps { }

export default function Cart({ }: CartProps) {
  const { items, removeItem, addOne, removeOne } = useCart();
  return (
    <>
      <p>CARRINHO</p>
      {items.map((item) => {
        return (
          <>
            <div>{item.product.name + " - " + item.quantity}</div>
            <button onClick={() => { removeItem(item) }}>X</button>
            <button onClick={() => { addOne(item) }}>+1</button>
            <button onClick={() => { removeOne(item) }}>-1</button>
          </>
        )
      })}
      <p>TOTAL: {
        items.reduce((acc, item) => {
          return acc + (parseInt(item.product.price) * item.quantity);
        }, 0)
      }</p>
    </>
  );
}
