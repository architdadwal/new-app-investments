import Image from "next/image";
import styles from "./page.module.css";

import Homeproduct from "./components/Homeproduct";
import Homecomponent1 from "./components/Homecomponent1";
import Homecomponent2 from "./components/Homecomponent2";
import layout from "./layout";
import Carousel from "./components/Carousel";
import Testimonials from "./components/Testimonials";
import MlmPropertyCard from "./components/Property";
import PropertyBenefitsCard from "./components/Homecomponent3";
export default function Home() {
  const testimonials = [
    {
      text: "I love this product! It's amazing.",
      image: "/test1.jpg", // Replace with actual image path
      name: "Rahul Tripathi",
      role: "Agra",
    },
    {
      text: "Best service I've ever experienced.",
      image: "/test2.jpg", // Replace with actual image path
      name: "Radhika Sharma",
      role: "Indore",
    },
    {
      text: "Highly recommend this service.",
      image: "/test3.jpg", // Replace with actual image path
      name: "Sussane D'Mello",
      role: "Shimla",
    },
    {
      text: "Exceptional quality and support.",
      image: "/test4.jpg", // Replace with actual image path
      name: "Surender Singh",
      role: "Delhi",
    },
  ];
  return (
    <layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "white",
        }}
      >
        <div className={styles.container}>
          <div className={styles.topdiv}>
            <h1>Welcome to Angel investing</h1>
            <h2> ...the safest investment option</h2>
            <div className={styles.buttondiv}>
              {" "}
              <button className={styles.bannerbutton}>Get Started </button>
            </div>
          </div>
          <Homeproduct />
          <MlmPropertyCard />

          <Homecomponent1 />
          <PropertyBenefitsCard />

          <Homecomponent2 />
          <Testimonials testimonials={testimonials} />
          {/* <Carousel /> */}
        </div>
      </div>
    </layout>
  );
}
