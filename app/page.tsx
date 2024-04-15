import styles from "@/app/page.module.scss";

import Produtos from '@/components/Produtos';
import Cart from '@/components/Cart';
import CartButton from '../components/CartButton';

export default function Home() {
  return (
    <main className={styles.main}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "stretch",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#F9F9F9",
      }}
    >
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
      <footer
        style={{
          width: "100%",
          height: "34px",
          backgroundColor: "#EEEEEE",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        MKS sistemas © Todos os direitos reservados
      </footer>
    </main>
  );
}
