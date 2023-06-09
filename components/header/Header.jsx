"use client";

import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <section className={styles.header}>
        <Image
          className={styles.imageIntro}
          src={require("../../assets/illustration-intro.png")}
        />
        <div className={styles.curvyContainer}>
          <Image
            src={require("../../assets/bg-curvy-mobile.svg")}
            style={{ objectFit: "cover", width: '100%' }}
          />
        </div>
        <h2 className={styles.headerTitle}>
          All your files in one secure location, accessible <br /> anyhere.
        </h2>
      </section>

      <div className={styles.infoContainer}>
        <h4>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workwers.
        </h4>
        <div className={styles.buttonStart}>
          <p>Get Started</p>
        </div>
      </div>
    </>
  );
}
