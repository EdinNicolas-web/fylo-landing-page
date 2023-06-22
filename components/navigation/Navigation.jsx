"use client";
import Image from "next/image";
import styles from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li>
          <Image
            src={require("../../assets/logo.svg")}
            width={100}
            height={30}
          />
        </li>
        <ul className={styles.menuItems}>
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </ul>
    </nav>
  );
}
