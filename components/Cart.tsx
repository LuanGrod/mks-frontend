"use client";

import useCart from "@/stores/useCart";
import { IoIosCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";

interface CartProps { }

export default function Cart({ }: CartProps) {
  const { items, removeItem, addOne, removeOne, isVisible, toggleCart } = useCart();
  return (
    <>
      {
        isVisible && (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "486px",
                height: "100%",
                backgroundColor: "#0F52BA",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                zIndex: 999,
              }}
            >
              <div
                style={{
                  padding: "36px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "27px",
                    height: '56px',
                  }}
                >
                  <p
                    style={{
                      color: "#fff",
                    }}
                  >
                    Carrinho <br /> de compras
                  </p>
                  <button
                    style={{
                      backgroundColor: "#000",
                      color: "#fff",
                      width: "35px",
                      height: "35px",
                      border: "none",
                      borderRadius: "50%",
                      fontSize: "18px",
                    }}
                    onClick={toggleCart}
                  >
                    X
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    height: "560px",
                    overflowY: "auto",
                    paddingTop: "30px"
                  }}
                >
                  {items.map((item) => {
                    return (
                      <>
                        <CartItem
                          key={item.product.id}
                          item={item}
                          addOne={addOne}
                          removeItem={removeItem}
                          removeOne={removeOne}
                        />
                      </>
                    )
                  })}
                </div>
              </div>
              <div>
                <p
                  style={{
                    color: "#fff",
                    fontSize: "28px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "0 36px",
                  }}
                >
                  Total:
                  <span
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    R$
                    {
                      items.reduce((acc, item) => {
                        return acc + (parseInt(item.product.price) * item.quantity);
                      }, 0)
                    }
                  </span>
                </p>
                <button
                  style={{
                    width: "100%",
                    height: "97px",
                    backgroundColor: "#000",
                    color: "#fff",
                    border: "none",
                    fontSize: "28px",
                  }}
                >
                  Finalizar Compra
                </button>
              </div>
            </div>
          </>
        )
      }
    </>
  );
}
