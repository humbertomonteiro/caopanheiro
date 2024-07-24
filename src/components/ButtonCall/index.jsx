import styles from "./buttonCall.module.css";

export default function ButtonCall({ type, link, action, text }) {
  return (
    <>
      {type === "link" ? (
        <a href={link} className={styles.button}>
          <span>{text}</span>
        </a>
      ) : (
        <button onClick={action} className={styles.button}>
          <span>{text}</span>
        </button>
      )}
    </>
  );
}
