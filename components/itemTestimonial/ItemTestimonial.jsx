import Image from "next/image";
import styles from "./ItemTestimonial.module.css";

export default function ItemTestimonial({
  comment,
  imageAvatar,
  nameUser,
  jobUser,
  showQuotes,
}) {
  return (
    <article style={{ position: "relative" }}>
      {showQuotes && (
        <Image
          src={require("../../assets/bg-quotes.png")}
          width={40}
          height={40}
          style={{ position: "absolute", top: "-40px", left: "25px" }}
        />
      )}
      <div className={styles.itemTestimonial}>
        <p>{comment}</p>
        <div className={styles.avatar}>
          <Image src={imageAvatar} className={styles.photo} />
          <div className={styles.labelsContainer}>
            <h5>{nameUser}</h5>
            <p>{jobUser}</p>
          </div>
        </div>
      </div>
    </article>
  );
}
