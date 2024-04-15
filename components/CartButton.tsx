"use client";

import useCart from "@/stores/useCart";
import styles from "@/components/cart.module.scss";

import { FaShoppingCart } from "react-icons/fa";

interface CartButtonProps { }

export default function CartButton({ }: CartButtonProps) {
  const { items, toggleCart } = useCart();
  return (
    <>
      <button
        className={styles.toggle}
        onClick={toggleCart}
      >
        <FaShoppingCart className="cart-icon" />
        <span>{items.length}</span>
      </button>
    </>
  );
}
