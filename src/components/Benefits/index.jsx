import styles from "./benefits.module.css";
import Title from "../Title";

export default function Benefits() {
  return (
    <div className={styles.container}>
      <Title text="Benefícios" />
      <div className={styles.content}>
        <div className={styles.box}>
          <h3>Estimulo mental e sensorial</h3>
        </div>
        <div className={styles.box}>
          <h3>Previne depressão</h3>
        </div>
        <div className={styles.box}>
          <h3>Previne obesidade</h3>
        </div>
        <div className={styles.box}>
          <h3>Previne problemas nas articalações</h3>
        </div>
        <div className={styles.box}>
          <h3>Auxilia na interação social</h3>
        </div>
        <div className={styles.box}>
          <h3>Reduz problemas cardiacos</h3>
        </div>
        <div className={styles.box}>
          <h3>Libera serotonina e deixa o cão feliz</h3>
        </div>
        <div className={styles.box}>
          <h3>Baixo nível de estresse</h3>
        </div>
        <div className={styles.box}>
          <h3>Contribui para longevidade</h3>
        </div>
      </div>
    </div>
  );
}
