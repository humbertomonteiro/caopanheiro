import styles from "./footer.module.css";

import logo from "../../assets/imgs/logos/logo.jpg";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>
        <img src={logo} alt="Logo" />
      </div>
      <div className={styles.box}>
        <h2>INFORMAÇÕES</h2>
        <ul>
          <h3>Contatos</h3>
          <li>TELEFONE: (85) 9000000</li>
          <li>EMAIL: caopanheiro@gmail.com</li>
        </ul>
      </div>
      <div className={styles.box}>
        <h2>NÓS ACOMPANHE</h2>
        <ul>
          <h3>Redes sociais</h3>
          <li>instagram</li>
          <li>whatsapp</li>
        </ul>
      </div>
    </footer>
  );
}
