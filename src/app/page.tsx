"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.bubbleBackground}>
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className={styles.bubble}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: "-50px",
            width: `${10 + Math.random() * 20}px`,
            height: `${10 + Math.random() * 20}px`,
            animationDuration: `${15 + Math.random() * 15}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      <div className={styles.Maincontainer}>
        <div className={styles.HeroCOntainer}>
          <Navbar />
          <MintContainer />
        </div>
        <Footer />
      </div>
    </div>
  );
}
