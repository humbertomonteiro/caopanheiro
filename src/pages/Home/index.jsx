import styles from "./home.module.css";
import Header from "../../components/Header";

import dog from "../../assets/imgs/dogs/dog-glass.jpg";

import ButtonCall from "../../components/ButtonCall";
import BoxesInfos from "../../components/BoxesInfo";
import Range from "../../components/Range";
import Location from "../../components/Location";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";

import { LuBone } from "react-icons/lu";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.containerMain}>
          <div className={styles.content}>
            <div className={styles.text}>
              <h1>A Melhor Creche para seu Melhor Aumigo(a)!</h1>
              <p>
                Cuidado, Carinho e Diversão para seu Cãozinho, Todos os Dias.
              </p>
            </div>
            <div className={styles.bone}>
              <LuBone />
              <LuBone />
              <LuBone />
            </div>
            <div className={styles.buttons}>
              <ButtonCall
                type="link"
                link="www.google.com"
                text="Agende uma visita!"
              />
              {/* <ButtonSpin type="link" link="www.google.com" text="Instagram" /> */}
              {/* <ButtonSimple type="link" link="#infos" text="Continuar" /> */}
            </div>
          </div>
          <img src={dog} alt="pug" />
        </div>
      </div>
      <BoxesInfos />
      <Range />
      <Location />
      <Benefits />
      <Footer />
    </>
  );
}
