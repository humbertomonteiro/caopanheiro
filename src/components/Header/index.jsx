import styles from "./header.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/imgs/logos/logo.jpg";

export default function Header() {
  return (
    <div className={styles.container}>
      <a href="" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </a>
      <nav className={styles.nav}>
        <a href="">Home</a>
        <a href="">Sobre nós</a>
        <a href="">Nossos serviços</a>
      </nav>
      <div className={styles.socials}>
        <a href="">
          <FaInstagram />
        </a>
        <a href="">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}
