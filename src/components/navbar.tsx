"use client";

import React from "react";
import styles from "./navbar.module.css";
import { WalletMultiButton } from "@/utils/constant";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.Top}>
        <div className={styles.LinkContainer}>
          <a
            href="https://sharkyboy.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a href="/">Mint</a>
        </div>
        <div className={styles.WalletWrapper}>
          <WalletMultiButton className={styles.walletGlow} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
