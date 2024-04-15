"use client";

import { Product } from "@/lib/types";
import { FiMinus } from "react-icons/fi";

type CartItem = {
  product: Product,
  quantity: number,
}

interface CartItemProps {
  key: number
  item: CartItem,
  removeItem: (item: CartItem) => void
  addOne: (item: CartItem) => void
  removeOne: (item: CartItem) => void
}

export default function CartItem({ item, addOne, removeItem, removeOne }: CartItemProps) {
  return (
    <>
      <div
        style={{
          width: "379px",
          height: "95px",
          minHeight: "95px",
          backgroundColor: "#fff",
          color: "#000",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          position: "relative"
        }}
      >
        <img src={item.product.photo} alt={item.product.name}
          style={{
            height: "60px",
            width: "fit-content",
            maxWidth: "60px",
          }}
        />
        <p
          style={{
            fontSize: "13px",
            margin: 0,
            width: "120px",
          }}
        >
          {item.product.brand + " " + item.product.name}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50px",
            height: "19px"
          }}
        >
          <p
            style={{
              fontSize: "8px",
              margin: 0
            }}
          >
            Qtd:
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              border: "0.3px solid #00000020",
              borderRadius: "5px",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                border: "none",
                padding: 0,
                width: "33%",
                borderRadius: "5px"
              }}
              onClick={() => { removeOne(item) }}
            >
              <FiMinus
                style={{
                  fontSize: "8px"
                }}
              />
            </button>
            <div
              style={{
                height: "60%",
                width: "0.3px",
                backgroundColor: "#00000020",
              }}
            ></div>
            <span
              style={{
                width: "33%",
                fontSize: "8px",
                textAlign: "center",
              }}
            >
              {item.quantity}
            </span>
            <div
              style={{
                height: "60%",
                width: "0.3px",
                backgroundColor: "#00000020",
              }}
            ></div>
            <button
              style={{
                backgroundColor: "#fff",
                border: "none",
                padding: 0,
                width: "33%",
                borderRadius: "5px",
                fontSize: "12px",
              }}
              onClick={() => { addOne(item) }}
            >
              +
            </button>

          </div>
        </div>
        <p
          style={{
            fontSize: "14px",
            margin: 0,
            fontWeight: "bold",
          }}
        >
          R$
          {parseInt(item.product.price)}
        </p>
        <button
          style={{
            position: "absolute",
            top: "-5px",
            right: "-5px",
            backgroundColor: "#000",
            color: "#fff",
            width: "22px",
            height: "22px",
            border: "none",
            borderRadius: "50%",
            fontSize: "13px",
          }}
          onClick={() => { removeItem(item) }}
        >
          X
        </button>
      </div>
    </>
  );
}
