import styles from "./footer.module.css";

import logo from "../../assets/imgs/logos/logo.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box} data-aos="zoom-in">
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.box} data-aos="zoom-in">
        <h2>INFORMAÇÕES</h2>
        <ul>
          <h3>Contatos</h3>
          <li>TELEFONE: (85) 9000000</li>
          <li>EMAIL: caopanheiro@gmail.com</li>
        </ul>
      </div>
      <div className={styles.box} data-aos="zoom-in">
        <h2>NÓS ACOMPANHE</h2>
        <ul>
          <h3>Redes sociais</h3>
          <li>instagram</li>
          <li>whatsapp</li>
        </ul>
      </div>
      {/* <div className={styles.copy}>
        Todos os direitos reservados - criado com amor por{" "}
        <a href="https://portfolio-three-bay-73.vercel.app/" target="_blank">
          Humberto
        </a>
      </div> */}
    </footer>
  );
}
