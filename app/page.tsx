import styles from "@/app/page.module.scss";
import Produtos from '../components/Produtos';

export default function Home() {
  return (
    <main className={styles.teste}>
     <Produtos/>
    </main>
  );
}
