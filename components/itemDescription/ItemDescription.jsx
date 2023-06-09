import Image from "next/image";
import styles from "./ItemDescription.module.css";

export default function ItemDescription({ urlImage, title, description }) {
  return (
    <article className={styles.item}>
      <Image src={urlImage} />
      <h4>{title}</h4>
      <p>{description}</p>
    </article>
  );
}
