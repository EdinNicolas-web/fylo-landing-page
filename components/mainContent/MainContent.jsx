"use client";
import Image from "next/image";
import ItemDescription from "../itemDescription/ItemDescription";
import styles from "./MainContent.module.css";

export default function MainContent() {
  return (
    <section className={styles.mainContainer}>
      <ItemDescription
        urlImage={require("../../assets/icon-access-anywhere.svg")}
        title={"Access your files, anywhere"}
        description={
          "The ability to use a smartphone, table, or computer to access your account means your files follow you everywhere."
        }
      />
      <ItemDescription
        urlImage={require("../../assets/icon-security.svg")}
        title={"Security you can trust"}
        description={
          "2-factor authetication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        }
      />
      <ItemDescription
        urlImage={require("../../assets/icon-collaboration.svg")}
        title={"Real-time collaboration"}
        description={
          "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."
        }
      />
      <ItemDescription
        urlImage={require("../../assets/icon-any-file.svg")}
        title={"Store any type of file"}
        description={
          "Whether your're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
      />

      <Image
        src={require("../../assets/illustration-stay-productive.png")}
        className={styles.imageStart}
      />
      <h4>Stay productive, wherever you are</h4>
      <p>
        Never let location be an issue when accessing your files. Fylo has you
        covered for all of your file storage needs.
      </p>
      <p>
        Securely share files and folders with friends, family and colleagues for
        live collaboration. No email attachments required.
      </p>
      <div className={styles.buttonLink}>
        <span className={styles.labelLink}>See how Fylo works</span>
        <Image
          src={require("../../assets/icon-arrow.svg")}
          width={30}
          height={30}
        />
      </div>
    </section>
  );
}
