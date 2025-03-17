import React from "react";
import styles from "./mintContainer.module.css";

const MintContainer = () => {
  return (
    <div className={styles.MintDiv}>
      <h3> SharkyBoy Genesis Collection Mint</h3>
      <div className={styles.ContentContainer}>
        <div className={styles.ContentLeft}>
          <img src="/hero.webp" alt="" />
        </div>
        <div className={styles.ContentRight}>
          <div className={styles.SymbolDiv}>
            <span>Symbol :</span>
            <span>FIN</span>
          </div>
          <div className={styles.DescDiv}>
            <span>Description&nbsp;: </span>
            <p>
              The SharkyBoy Genesis Collection is a limited 1,000-piece NFT
              series featuring unique, battle-ready mutant sharks with bold
              designs, rare traits, and legendary origins. More than just
              collectibles, these NFTs grant exclusive community perks, future
              airdrops, and governance rights in the SharkyBoy ecosystem. With a
              mix of samurai warriors, street legends, and high-tech combat
              sharks, this collection blends style, rarity, and innovation into
              a powerful Web3 experience. Own a piece of the ocean's fiercest
              warriors—once they're gone, they're gone forever.
            </p>
          </div>
          <div className={styles.MintCountBox}>
            <div>
              <span>Total Mint : </span>
            </div>
            <div
              style={{
                // width: "100%",
                background: "black",
                margin: "10px 1em",
                height: "20px",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <div className={styles.MintPercent}>10/100</div>
              <div
                style={{
                  width: "60%",
                  height: "20px",
                  borderRadius: "10px",

                  background:
                    " linear-gradient(108deg, rgba(230,57,70,1) 0%, rgba(227,199,166,1) 44%, rgba(102,182,195,1) 77%)",
                }}
              />
            </div>
          </div>
          <div className={styles.CardBox}>
            <div className={styles.MintBox}>
              <div className={styles.MintDetails}>
                <div className={styles.MintBoxLeft}>
                  <span>White List Mint</span>

                  <span>0.5 SOL</span>
                </div>

                <div className={styles.MintBoxRight}>
                  <span>100:59:00</span>
                </div>
              </div>
              <button>Mint Now !</button>
            </div>
            <div className={styles.MintBox}>
              <div className={styles.MintDetails}>
                <div className={styles.MintBoxLeft}>
                  <span>OG Mint</span>

                  <span>0.5 SOL</span>
                </div>

                <div className={styles.MintBoxRight}>
                  <span>100:59:00</span>
                </div>
              </div>
              <button>Mint Now !</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintContainer;
