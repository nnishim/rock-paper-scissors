import React from "react";
import styles from './Icon.module.css'

function Icon({click, type}) {
  return (
    <div onClick={click} className={styles.icon}>
      <img src={`img/${type}.png`} alt="" />
    </div>
  );
}

export default Icon;
