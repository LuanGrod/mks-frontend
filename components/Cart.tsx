"use client";

import useCart from "@/stores/useCart";
import CartItem from "./CartItem";
import styles from "@/components/cart.module.scss";

import { AnimatePresence, motion } from "framer-motion";

interface CartProps { }

export default function Cart({ }: CartProps) {
  const { items, removeItem, addOne, removeOne, isVisible, toggleCart } = useCart();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 486}}
          animate={{ x: 0, type: "spring"}}
          exit={{ x: 486 }}
          transition={{ duration: 0.3 }}
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
                    className={styles.botaofecharcart}
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
                 className={styles.botaofinalizarcompra}
                >
                  Finalizar Compra
                </button>
              </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
