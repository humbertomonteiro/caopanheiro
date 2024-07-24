import styles from "./buttonSimple.module.css";

import { TiArrowDownThick } from "react-icons/ti";

export default function ButtonSimple({ type, link, action, text }) {
  return (
    <>
      {type === "link" ? (
        <a href={link} className={styles.button}>
          <span>
            {text} <TiArrowDownThick />
          </span>
        </a>
      ) : (
        <button onClick={action} className={styles.button}>
          <span>
            {text} <TiArrowDownThick />
          </span>
        </button>
      )}
    </>
  );
}
