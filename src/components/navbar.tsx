"use client";

import React from "react";
import styles from "./navbar.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.LogoContainer}>
        <a href="/">
          <img src="/logo.png" alt="" />
          <span>SHARKYBOY NFTs</span>
        </a>
      </div>
      <WalletMultiButton
        style={{ background: "var(--c2)", color: "var(--c3)" }}
      />
    </div>
  );
};

export default Navbar;
