import styles from "./range.module.css";

import pug from "../../assets/imgs/dogs/pug-png.png";

import { IoPaw } from "react-icons/io5";

export default function Range() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>
          Nosso Hotel para Cães - <span>Cãopanheiro</span>.
        </h2>
        <p>
          No nosso hotel para cães, seu melhor amigo encontrará um verdadeiro
          lar longe de casa. Oferecemos um ambiente acolhedor, seguro e cheio de
          amor para garantir que cada hóspede tenha uma estadia agradável e
          confortável.
        </p>
      </div>
      <div className={styles.img}>
        <img src={pug} alt="Cachorro" />
      </div>
      <div className={styles.paw1}>
        <IoPaw />
      </div>
      <div className={styles.paw2}>
        <IoPaw />
      </div>
      {/* <div className={styles.paw3}>
        <IoPaw />
      </div> */}
    </div>
  );
}
