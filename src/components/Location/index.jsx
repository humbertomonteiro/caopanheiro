import styles from "./location.module.css";
import Title from "../Title";
import ButtonCall from "../ButtonCall";
import SlidesDrag from "../SlidesDrag";
import WidthWindow from "../WidthWindow";

function Location1() {
  return (
    <div className={styles.location}>
      <h2>Venha nos visitar</h2>
      <p>
        Descubra por que somos a escolha número um para quem busca o melhor
        cuidado e conforto para seus cães. No nosso hotel, cada hóspede é
        tratado com carinho, como se fosse parte da nossa própria família.
      </p>
      <div className={styles.button}>
        <ButtonCall
          type="link"
          link="www.google.com"
          text="Agende uma visita!"
        />
      </div>
    </div>
  );
}
function Location2() {
  return (
    <div className={styles.location}>
      <div className={styles.title}>
        <h2>Manaus</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15936.365652716268!2d-60.0071212!3d-3.0702455!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1b4db3c04057%3A0x10d986c9fe6ec214!2sC%C3%A3opanheiro%20Resort%20%7C%20Hotel%20e%20Creche%20para%20c%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1721783352354!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
function Location3() {
  return (
    <div className={styles.location}>
      <div className={styles.title}>
        <h2>Fortaleza</h2>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15925.39672715655!2d-38.5109644!3d-3.7338558!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7493521e2fe69%3A0x73ea61fb4df81260!2sC%C3%A3opanheiro%20Resort%20Fortaleza%20%7C%20Hotel%20e%20Creche%20para%20c%C3%A3es!5e0!3m2!1spt-BR!2sbr!4v1721783918201!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default function Location() {
  return (
    <div className={styles.container}>
      <Title text="Localizações" />
      <div className={styles.content}>
        {WidthWindow() >= 1045 ? (
          <>
            <Location1 />
            <Location2 />
            <Location3 />
          </>
        ) : (
          <SlidesDrag array={[Location1, Location2, Location3]} />
        )}
      </div>
    </div>
  );
}
