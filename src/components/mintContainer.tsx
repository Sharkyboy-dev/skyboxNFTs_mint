"use client";
import React, { useState } from "react";
import styles from "./mintContainer.module.css";
import { useCandyMachine } from "@/utils/solanaBasicContext";
import { useUmi } from "@/utils/useUmi";
import { dummyPublicKey } from "@/utils/AppWalletProvider";
import {
  generateSigner,
  publicKey,
  some,
  transactionBuilder,
} from "@metaplex-foundation/umi";
import {
  setComputeUnitLimit,
  setComputeUnitPrice,
} from "@metaplex-foundation/mpl-toolbox";
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";
import { toast } from "react-toastify";
import {
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";

const MintContainer = () => {
  const { CandyMachine, CandyGuard, isCMLoading, setIsCMLoading } = useCandyMachine();
  const [mintingText, setMintingText] = useState("Mint Now");
  const umi = useUmi();

  const redeemed = Number(CandyMachine?.itemsRedeemed || 0);
  const total = Number(CandyMachine?.itemsLoaded || 1);
  const percentage = (redeemed / total) * 100;
  const isSoldOut = redeemed >= total;
  const isMinting = mintingText === "Minting..";

  const groupToUse = CandyGuard?.groups.find((g) => g.label === "PUBLIC");
  const groupPrice = groupToUse?.guards.solPayment;

  async function createNft(buyer: any) {
    if (!CandyMachine || !CandyGuard || !CandyMachine?.publicKey) return;

    setMintingText("Minting..");
    try {
      const nftMint = generateSigner(umi);
      if (groupPrice?.__option !== "Some" || !groupPrice?.value) return;

      const txBuilder = transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 1_000_000 }))
        .add(setComputeUnitPrice(umi, { microLamports: 100_000 }))
        .add(
          mintV2(umi, {
            candyMachine: CandyMachine.publicKey,
            candyGuard: CandyGuard.publicKey,
            nftMint,
            tokenStandard: TokenStandard.ProgrammableNonFungible,
            collectionMint: CandyMachine.collectionMint,
            collectionUpdateAuthority: publicKey("finzc9xMFo6F5GqPhJrneMnTsZu5eocJzJTMooBGLgv"),
            group: some("PUBLIC"),
            minter: buyer,
            mintArgs: { solPayment: groupPrice.value },
          })
        );

      const tx = await txBuilder.sendAndConfirm(umi);
      const confirmation = await umi.rpc.confirmTransaction(tx.signature, {
        strategy: { type: "blockhash", ...(await umi.rpc.getLatestBlockhash()) },
      });

      await new Promise((resolve) => setTimeout(resolve, 2000));
      const nftAccount = await umi.rpc.getAccount(nftMint.publicKey);

      if (!nftAccount.exists) {
        toast.error("❌ Mint failed: NFT not created on-chain");
        return;
      }

      if (confirmation.value.err) {
        toast.error("Mint failed: Not enough SOL or rejected");
      } else {
        toast.success("✅ Mint successful!");
        setIsCMLoading?.(true);
      }
    } catch (err) {
      console.error("Mint error:", err);
      toast.error("Transaction failed or rejected");
    } finally {
      setMintingText("Mint Now");
    }
  }

  return (
    <div className={styles.MintContentWrapper}>
      <div className={`${styles.MintDiv} ${isSoldOut ? styles.soldOut : ""}`}>
        <span>SHARKYBOY MINT MACHINE</span>

        <div className={styles.ContentContainer}>
          {/* LEFT SIDE: IMAGE + BUTTON + MINT PRICE + ICONS */}
          <div className={styles.ContentLeft}>
            <img src="/logoGif.gif" alt="SharkyBoy" />

            <button
              className={`${styles.MintButton} ${isMinting ? styles.minting : ""}`}
              onClick={() => createNft(umi.identity.publicKey)}
              disabled={
                isCMLoading ||
                mintingText !== "Mint Now" ||
                umi.identity.publicKey === dummyPublicKey
              }
            >
              {isCMLoading ? "Loading.." : mintingText}
            </button>

            <div className={styles.MintPriceTag}>Mint Price: 0.5 SOL</div>

            <div className={styles.IconsContainer}>
              <a href="https://t.co/2PyAgbMLEj" target="_blank" rel="noreferrer"><FaTelegram /></a>
              <a href="http://instagram.com/sharkyboy_nft" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://github.com/Sharkyboy-dev" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://x.com/sharkyboy_nft" target="_blank" rel="noreferrer"><FaXTwitter /></a>
            </div>
          </div>

          {/* RIGHT SIDE: DESCRIPTION + PROGRESS BAR */}
          <div className={styles.ContentRight}>
            <div className={styles.DescDiv}>
              <span>Symbol : FIN</span>
              <span>Description</span>
              <p>
                SHARKYBOY THE SHARKYBOY GENESIS COLLECTION IS A LIMITED 1,000-PIECE NFT SERIES FEATURING UNIQUE, BATTLE-READY MUTANT SHARKS WITH BOLD DESIGNS, RARE TRAITS, AND LEGENDARY ORIGINS. MORE THAN JUST COLLECTIBLES, THESE NFTS GRANT EXCLUSIVE COMMUNITY PERKS, FUTURE AIRDROPS, AND GOVERNANCE RIGHTS IN THE SHARKYBOY ECOSYSTEM. WITH A MIX OF SAMURAI WARRIORS, STREET LEGENDS, AND HIGH-TECH COMBAT SHARKS, THIS COLLECTION BLENDS STYLE, RARITY, AND INNOVATION INTO A POWERFUL WEB3 EXPERIENCE. OWN A PIECE OF THE OCEAN'S FIERCEST WARRIORS—ONCE THEY'RE GONE, THEY'RE GONE FOREVER.
              </p>
              <p><strong>Mint Price:</strong> 0.5 SOL</p>
            </div>

            <div className={styles.MintCountBox}>
              <div
                className={`${styles.MintProgressFill} ${
                  percentage < 33 ? styles.low : percentage < 66 ? styles.medium : styles.high
                }`}
                style={{ "--progress-width": `${percentage}%` } as React.CSSProperties}
              />
              <div
                className={`${styles.MintPercent} ${
                  percentage >= 90 ? styles.nearFull : ""
                }`}
              >
                {redeemed} of {total}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintContainer;
