"use client";
import ItemTestimonial from "../itemTestimonial/ItemTestimonial";
import styles from "./Testimonials.module.css";
export default function Testimonials() {
  return (
    <section className={styles.testimonialsContainer}>
      <ItemTestimonial
        comment="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
        imageAvatar={require("../../assets/profile-1.jpg")}
        showQuotes={true}
        nameUser="Satish Patel"
        jobUser="Founder & CEO, Huddle"
      />
      <ItemTestimonial
        comment="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
        imageAvatar={require("../../assets/profile-2.jpg")}
        nameUser="Bruce McKenzie"
        jobUser="Founder & CEO, Huddle"
      />
      <ItemTestimonial
        comment="Fylo has improved our team productivity by an order of magnitude.
          Since making the switch our team has become a well-oiled collaboration
          machine."
        imageAvatar={require("../../assets/profile-3.jpg")}
        nameUser="Iva Boyd"
        jobUser="Founder & CEO, Huddle"
      />
    </section>
  );
}
