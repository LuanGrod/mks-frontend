"use client";

import useCart from "@/stores/useCart";
import { FaShoppingCart } from "react-icons/fa";

interface CartButtonProps { }

export default function CartButton({ }: CartButtonProps) {
  const { items } = useCart();
  return (
    <>
      <button
        style={{
          backgroundColor: "#fff",
          padding: "8px 20px",
          borderRadius: "5px",
          border: "none",
          fontSize: "18px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: '90px',
          height: '45px',
          fontWeight: 'bold',
        }}
      >
        <FaShoppingCart />
        <span>{items.length}</span>
      </button>
    </>
  );
}
