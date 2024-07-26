
import LeftContent from "@/components/MainContent/LeftContent/LeftContent";
import styles from "./page.module.css";
import MidddleContent from "@/components/MainContent/MiddleContent/MidddleContent";
import RightContent from "@/components/MainContent/RightContent/RightContent";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.left}> <LeftContent /></div>
      <div className={styles.middle}><MidddleContent /></div>
      <div className={styles.right}><RightContent /></div>
    </main>
  );
}
