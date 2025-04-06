"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";
import { useEffect, useRef } from "react";

export default function Home() {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = bubbleRef.current;
    if (!container) return;

    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement("div");
      bubble.className = styles.bubble;
      bubble.style.width = `${Math.random() * 20 + 10}px`;
      bubble.style.height = bubble.style.width;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.animationDuration = `${Math.random() * 20 + 10}s`;
      bubble.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(bubble);
    }
  }, []);

  return (
    <div className={styles.bubbleBackground} ref={bubbleRef}>
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
