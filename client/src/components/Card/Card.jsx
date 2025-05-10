import React from "react";
import styles from "../../styles/Card.module.css"

function Card({ id, name, email, phone }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardTitle} >{name}</div>
      <p className={styles.cardText}><strong>Email:</strong> {email}</p>
      <p className={styles.cardText}><strong>Teléfono:</strong> {phone}</p>
    </div>
  );
}

export default Card;
