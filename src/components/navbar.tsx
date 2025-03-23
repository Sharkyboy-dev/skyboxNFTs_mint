"use client";

import React from "react";
import styles from "./navbar.module.css";
import { WalletMultiButton } from "@/utils/constant";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.Top}>
        <div></div>
        <div className={styles.LinkContainer}>
          <a href="https://sharkyboy.com" target="_blank">
            Home
          </a>
          <a href="/">Mint</a>
        </div>
        <WalletMultiButton
          style={{
            background:
              "linear-gradient(108deg, rgba(212,166,227,1) 0%, rgba(102,182,195,1) 100%)",
            color: "var(--c3)",
            border: "4px solid var(--c5)",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default Navbar;
