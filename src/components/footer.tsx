import React from "react";
import styles from "./footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaDiscord,
  FaTelegram,
  FaGithub,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
      <div className={styles.FooterTop}>
        <div className={styles.FooterLinksBox}>
          <span>Follow us on </span>
          <div className={styles.Icons}>
            <a href="https://t.co/2PyAgbMLEj" target="_blank">
              <FaTelegram />
            </a>
            <a href="http://instagram.com/sharkyboy_nft" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/Sharkyboy-dev" target="_blank">
              <FaGithub />
            </a>
            <a href=" https://x.com/sharkyboy_nft" target="_blank">
              <FaXTwitter />
            </a>
          </div>
        </div>

        <div className={styles.FooterLinksBox}>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/privacypolicy">Privacy Policy</a>
          <a href="/termsandcondition">Terms & Condition</a>
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
        SHARKYBOY NFTs DAO Copyright © 2025 SHARKYBOY NFTs - All rights reserved
      </span>
    </div>
  );
};

export default Footer;
