import Produtos from '@/components/Produtos';
import Cart from '@/components/Cart';

import styles from "@/app/page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
     <Produtos/>
     <Cart/>
    </main>
  );
}
