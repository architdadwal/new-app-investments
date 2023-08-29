// components/Testimonials.js
import styles from "./Testimonials.module.css";
import React from "react";

const TestimonialCard = ({ text, image, name, role }) => {
  return (
    <div className={styles.testimonialcard}>
      <img src={image} alt={name} className={styles.testimonialimage} />
      <p className={styles.testimonial - text}>{text}</p>
      <p className={styles.testimonial - name}>{name}</p>
      <p className={styles.testimonial - role}>{role}</p>
    </div>
  );
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className={styles.testimonialscontainer}>
      <h2 className={styles.testimonialsheading}>What Our Customers Say</h2>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            text={testimonial.text}
            image={testimonial.image}
            name={testimonial.name}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
