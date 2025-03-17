"use client";

import React from "react";
import styles from "./navbar.module.css";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div className={styles.LogoContainer}>
        <a href="/">Tick Tack DAO</a>
        <span>beta</span>
      </div>
      <WalletMultiButton style={{ background: "grey" }} />
    </div>
  );
};

export default Navbar;
