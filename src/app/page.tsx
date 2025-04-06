"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const container = document.querySelector(`.${styles.bubbleBackground}`);
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add(styles.bubble);
      bubble.style.width = `${Math.random() * 20 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <div className={styles.bubbleBackground}>
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
