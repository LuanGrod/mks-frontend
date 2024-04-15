import styles from "@/app/page.module.scss";

import Produtos from '@/components/Produtos';
import Cart from '@/components/Cart';
import { FaShoppingCart } from "react-icons/fa";
import useCart from "@/stores/useCart";
import CartButton from '../components/CartButton';

export default function Home() {
  return (
    <main className={styles.main}>
      <nav
        style={{
          width: "90%",
          height: "101px",
          backgroundColor: "#0F52BA",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
        }}
      >
        <p
          style={{
            color: "#fff",
            fontSize: "20px",

          }}
        >
          <span
            style={{
              fontSize: "40px",
              marginRight: "7px"
            }}
          >
            MKS
          </span>
          Sistemas
        </p>
        <CartButton />
      </nav>
      <Produtos />
      <Cart />
    </main>
  );
}
