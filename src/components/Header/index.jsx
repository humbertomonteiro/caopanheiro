import styles from "./header.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import logo from "../../assets/imgs/logos/logo.jpg";

import WidthWindow from "../WidthWindow";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div className={styles.container}>
      <a href="" className={styles.logo}>
        <img src={logo} alt="Logo" />
      </a>
      {WidthWindow() > 768 ? (
        <>
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
        </>
      ) : (
        <>
          <div onClick={handleToggle} className={styles.bars}>
            {toggle === false ? (
              <FaBars />
            ) : (
              <>
                <IoClose />
                <div className={styles.navMobile}>
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
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
