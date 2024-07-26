import styles from "./boxesInfos.module.css";
import hospedagem from "../../assets/imgs/boxes/hospedagem.jpeg";
import espaco from "../../assets/imgs/boxes/espaço.jpeg";
import profissionais from "../../assets/imgs/boxes/profissionais.png";
import Title from "../Title";
import SlidesDrag from "../SlidesDrag";

import WidthWindow from "../WidthWindow";
import ButtonSimple from "../ButtonSimple";

function Box1() {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img src={hospedagem} alt="Serviço de hospedagem" />
      </div>
      <div className={styles.text}>
        <h3>Serviço de creche</h3>
        <p>
          Câmeras de segurança e supervisão constante para garantir a segurança
          do seu pet.
        </p>
        <div className={styles.buttons}>
          <ButtonSimple type={"link"} link={""} text={"LER MAIS"} />
        </div>
      </div>
    </div>
  );
}
function Box2() {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img src={espaco} alt="Amplo espaço" />
      </div>
      <div className={styles.text}>
        <h3>Amplo espaço</h3>
        <p>
          Nosso espaço é projetado para segurança e diversão, com áreas
          específicas para diferentes cães.
        </p>
        <div className={styles.buttons}>
          <ButtonSimple type={"link"} link={""} text={"LER MAIS"} />
        </div>
      </div>
    </div>
  );
}
function Box3() {
  return (
    <div className={styles.box}>
      <div className={styles.img}>
        <img src={profissionais} alt="Profissionais" />
      </div>
      <div className={styles.text}>
        <h3>Profissionais especializados</h3>
        <p>
          Nossa equipe é formada por profissionais experientes e apaixonados por
          animais.
        </p>
        <div className={styles.buttons}>
          <ButtonSimple type={"link"} link={""} text={"LER MAIS"} />
        </div>
      </div>
    </div>
  );
}

export default function BoxesInfos() {
  return (
    <div id="infos" className={styles.container}>
      <Title text="Nossos Serviços" />
      <div className={styles.boxes}>
        {WidthWindow() >= 1045 ? (
          <>
            <Box1 />
            <Box2 />
            <Box3 />
          </>
        ) : (
          <SlidesDrag array={[Box1, Box2, Box3]} />
        )}
      </div>
    </div>
  );
}
