"use client";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className={styles.Maincontainer}>
      <div className={styles.HeroCOntainer}>
        <Navbar />
        <MintContainer />
      </div>
      <Footer />
    </div>
  );
}
