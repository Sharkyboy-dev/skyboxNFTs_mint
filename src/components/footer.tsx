import React from "react";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaDiscord,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterTop}>
        <div className={styles.FooterLinksBox}>
          <span>Follow us on </span>
          <div className={styles.Icons}>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaFacebook />
            </a>
            <a href="/">
              <FaXTwitter />
            </a>
            <a href="/">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className={styles.FooterLinksBox}>
          <a href="/">Disclaimer</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms & Condition</a>
        </div>

        <div className={styles.FooterLinksBox}>
          <span>Subscribe to our NewsLetter</span>
          <div className={styles.NewsLetter}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
            />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <span className={styles.FooterText}>
        Ticktac DAO Copyright © 2025 Ticktac DAO - All rights reserved
      </span>
    </div>
  );
};

export default Footer;
