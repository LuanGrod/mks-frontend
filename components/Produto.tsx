"use client";

import { Product } from "@/lib/types";
import useCart from "@/stores/useCart";
import styles from "@/components/product.module.scss";

import { FiShoppingBag } from "react-icons/fi";

interface ProdutoProps {
  key: number;
  data: Product;
}

export default function Produto({ data }: ProdutoProps) {
  const { addItem } = useCart();

  return (
    <>
      <div key={data.id}
        style={{
          backgroundColor: "#fff",
          width: "218px",
          height: "290px",
          borderRadius: "12px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <img src={data.photo} alt={data.name}
            style={{
              height: "138px",
              width: "fit-content",
            }}
          />
          <div
            style={{
              width: "100%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: "1px",
              margin: "5px 0 0 0",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                margin: 0,
              }}
            >
              {data.name + " " + data.brand}
            </p>
            <p
              style={{
                background: "#000",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "bold",
                padding: "3px",
                borderRadius: "4px",
                width: "fit-content",
                height: "fit-content",
                margin: 0,
                marginLeft: "2px"
              }}
            >
              {"R$" + parseInt(data.price)}
            </p>
          </div>
          <p
            style={{
              fontSize: "10px",
              margin: "5px 0 0 0",
              textAlign: "justify"
            }}
          >
            {data.description}
          </p>
        </div>

        <button
          className={styles.botaocompra}
          onClick={() => addItem({product: data, quantity: 1})}
        >
          <FiShoppingBag />
          <p>
            COMPRAR
          </p>
        </button>
      </div>
    </>
  );
}
