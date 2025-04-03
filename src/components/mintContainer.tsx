"use client";
import React, { useState } from "react";
import styles from "./mintContainer.module.css";
import { useCandyMachine } from "@/utils/solanaBasicContext";
import { useUmi } from "@/utils/useUmi";
import { dummyPublicKey } from "@/utils/AppWalletProvider";
import {
  generateSigner,
  publicKey,
  sol,
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
import bs58 from "bs58";
import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTelegram,
  FaXTwitter,
} from "react-icons/fa6";
const MintContainer = () => {
  const { CandyMachine, CandyGuard, isCMLoading, setIsCMLoading } =
    useCandyMachine();
  const [mintingText, setMintingText] = useState("Mint Now");

  const umi = useUmi();

async function createNft(buyer: any) {
  if (!CandyMachine || !CandyGuard || !CandyMachine?.publicKey) {
    return;
  }

  setMintingText("Minting..");

  try {
    const nftMint = generateSigner(umi);

    const groupToUse = CandyGuard?.groups.find(
      (group) => group.label === "PUBLIC"
    );
    const groupPrice = groupToUse?.guards.solPayment;
    if (groupPrice?.__option !== "Some" || !groupPrice?.value) return;

    const txBuilder = transactionBuilder()
      .add(setComputeUnitLimit(umi, { units: 1_000_000 }))
      .add(setComputeUnitPrice(umi, { microLamports: 100_000 }))
      .add(
        mintV2(umi, {
          candyMachine: CandyMachine?.publicKey,
          candyGuard: CandyGuard?.publicKey,
          nftMint: nftMint,
          tokenStandard: TokenStandard.ProgrammableNonFungible,
          collectionMint: CandyMachine?.collectionMint,
          collectionUpdateAuthority: publicKey(
            "finzc9xMFo6F5GqPhJrneMnTsZu5eocJzJTMooBGLgv"
          ),
          group: some("PUBLIC"),
          minter: buyer,
          mintArgs: {
            solPayment: groupPrice?.value,
          },
        })
      );

    const tx = await txBuilder.sendAndConfirm(umi);

const confirmation = await umi.rpc.confirmTransaction(tx.signature, {
  strategy: {
    type: "blockhash",
    ...(await umi.rpc.getLatestBlockhash()),
  },
});

if (confirmation.value.err) {
  toast.error("Mint failed: Not enough SOL or rejected");
  console.error("❌ Transaction failed", confirmation.value.err);
} else {
  toast.success("✅ Mint successful!");
  setIsCMLoading && setIsCMLoading(true);
}
  } catch (error) {
    console.error("Error during mint:", error);
    toast.error("Transaction failed or rejected by wallet");
  } finally {
    setMintingText("Mint Now");
  }
}

  return (
    <div className={styles.MintDiv}>
      <span>SHARKYBOY MINT MACHINE</span>
      <div className={styles.ContentContainer}>
        <div className={styles.ContentLeft}>
          <img src="/logoGif.gif" alt="" />
          <div className={styles.IconsContainer}>
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
        <div className={styles.ContentRight}>
          <div className={styles.DescDiv}>
            <span>Symbol : FIN</span>
            <span>Description</span>
            <p>
              SHARKYBOY THE SHARKYBOY GENESIS COLLECTION IS A LIMITED
              1,000-PIECE NFT SERIES FEATURING UNIQUE, BATTLE-READY MUTANT
              SHARKS WITH BOLD DESIGNS, RARE TRAITS, AND LEGENDARY ORIGINS. MORE
              THAN JUST COLLECTIBLES, THESE NFTS GRANT EXCLUSIVE COMMUNITY
              PERKS, FUTURE AIRDROPS, AND GOVERNANCE RIGHTS IN THE SHARKYBOY
              ECOSYSTEM. WITH A MIX OF SAMURAI WARRIORS, STREET LEGENDS, AND
              HIGH-TECH COMBAT SHARKS, THIS COLLECTION BLENDS STYLE, RARITY, AND
              INNOVATION INTO A POWERFUL WEBS EXPERIENCE. OWN A PIECE OF THE
              OCEAN'S FIERCEST WARRIORS-ONCE THEY'RE GONE, THEY'RE GONE FOREVER.
            </p>
          </div>
          <div className={styles.MintCountBox}>
            <div className={styles.Counttext}>
              <div
                style={{
                  background: "white",
                  margin: "10px 1em",
                  height: "60px",
                  borderRadius: "2em",
                  padding: "5px",
                  width: "100%",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: `${
                      (Number(CandyMachine?.itemsRedeemed) /
                        Number(CandyMachine?.itemsLoaded)) *
                      100
                    }%`,
                    minWidth: "5%",
                    height: "50px",
                    borderRadius: "2em",

                    background: "black",
                  }}
                />

                <div className={styles.MintPercent}>
                  {Number(CandyMachine?.itemsRedeemed)}&nbsp; of &nbsp;
                  {Number(CandyMachine?.itemsLoaded)}
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => createNft(umi.identity.publicKey)}
            disabled={
              isCMLoading ||
              mintingText !== "Mint Now" ||
              umi.identity.publicKey === dummyPublicKey
            }
          >
            {isCMLoading ? "Loading.." : mintingText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MintContainer;