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
      if (groupPrice?.__option != "Some" || !groupPrice?.value) return;

      const tx = await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
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

      toast.info("Minting Tx sent");

      let buildTx = await tx.buildWithLatestBlockhash(umi);
      buildTx = await umi.identity.signTransaction(buildTx);

      const signature = await umi.rpc.sendTransaction(buildTx, {
        commitment: "finalized",
      });

      const confirmTx = await umi.rpc.confirmTransaction(signature, {
        strategy: {
          type: "blockhash",
          ...(await umi.rpc.getLatestBlockhash()),
        },
      });

      if (confirmTx) {
        toast.success("Transaction confirmed");
        setIsCMLoading && setIsCMLoading(true);
      }
    } catch (error) {
      setIsCMLoading && setIsCMLoading(true);
      toast.error("Tx failed");
    } finally {
      setMintingText("Mint Now");
    }
  }
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
                background: "black",
                margin: "10px 1em",
                height: "20px",
                borderRadius: "10px",
                position: "relative",
              }}
            >
              <div className={styles.MintPercent}>
                {" "}
                {Number(CandyMachine?.itemsRedeemed)}&nbsp;/&nbsp;
                {Number(CandyMachine?.itemsLoaded)}
              </div>
              <div
                style={{
                  width: `${
                    (Number(CandyMachine?.itemsRedeemed) /
                      Number(CandyMachine?.itemsLoaded)) *
                    100
                  }%`,
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

                {/* <div className={styles.MintBoxRight}>
                  <span>100:59:00</span>
                </div> */}
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
      </div>
    </div>
  );
};

export default MintContainer;
