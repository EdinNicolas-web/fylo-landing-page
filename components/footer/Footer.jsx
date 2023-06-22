"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image src={require("../../assets/logo.svg")} width={140} height={40} />
      <div className={styles.itemDescription}>
        <Image
          src={require("../../assets/icon-location.svg")}
          width={20}
          height={20}
          className={styles.icon}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          nemo delectus laborum nulla officiis vero magnam illum perspiciatis
          quia.
        </p>
      </div>
      <div className={styles.itemDescription}>
        <Image
          src={require("../../assets/icon-phone.svg")}
          width={20}
          height={20}
          className={styles.icon}
        />
        <p>+1-543-123-4567</p>
      </div>
      <div className={styles.itemDescription}>
        <Image
          src={require("../../assets/icon-email.svg")}
          width={20}
          height={20}
          className={styles.icon}
        />
        <p>example@fylo.com</p>
      </div>
      <div className={styles.container}>
        <p>About us</p>
        <p>Jobs</p>
        <p>Press</p>
        <p>Blog</p>
      </div>
      <div className={styles.container}>
        <p>Contact us</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div className={styles.social}>
        <div className={styles.iconSocial}>
          <Image
            src={require("../../assets/logo-facebook.svg")}
            width={20}
            height={20}
          />
        </div>
        <div className={styles.iconSocial}>
          <Image
            src={require("../../assets/logo-twitter.svg")}
            width={20}
            height={20}
          />
        </div>
        <div className={styles.iconSocial}>
          <Image
            src={require("../../assets/logo-instagram.svg")}
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
