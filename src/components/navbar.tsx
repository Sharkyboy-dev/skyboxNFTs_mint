"use client";

import React from "react";
import styles from "./navbar.module.css";
import { WalletMultiButton } from "@/utils/constant";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.Top}>
        <WalletMultiButton
          style={{
            background: "rgb(212,166,227)",
            background:
              "linear-gradient(108deg, rgba(212,166,227,1) 0%, rgba(102,182,195,1) 100%)",
            color: "var(--c3)",
            border: "4px solid black",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className={styles.Botom}>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">
          <img src="/logo.png" alt="" />
        </a>

        <a href="/">How to Buy</a>
        <a href="/">FAQs</a>
      </div>
    </div>
  );
};

export default Navbar;
