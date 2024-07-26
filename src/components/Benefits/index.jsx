import styles from "./benefits.module.css";
import Title from "../Title";
import beagle from "../../assets/imgs/background/beagle-bg.jpg";
import { IoPaw } from "react-icons/io5";
import ButtonCall from "../ButtonCall";

export default function Benefits() {
  return (
    <div className={styles.container}>
      <Title text="Benefícios" />
      <div className={styles.content}>
        <img src={beagle} alt="" />
        <div className={styles.lists}>
          <ul>
            <li>
              <IoPaw /> Estimulo mental e sensorial
            </li>
            <li>
              <IoPaw /> Previne depressão
            </li>
            <li>
              <IoPaw /> Previne obesidade
            </li>
            <li>
              <IoPaw /> Previne problemas nas articalações
            </li>
            <li>
              <IoPaw /> Auxilia na interação social
            </li>
          </ul>
          <ul>
            <li>
              <IoPaw /> Reduz problemas cardiacos
            </li>
            <li>
              <IoPaw /> Libera serotonina e deixa o cão feliz
            </li>
            <li>
              <IoPaw /> Baixo nível de estresse
            </li>
            <li>
              <IoPaw /> Contribui para longevidade
            </li>
          </ul>
          <div className={styles.buttons}>
            <ButtonCall
              type="link"
              link="www.google.com"
              text="Agende uma visita!"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
