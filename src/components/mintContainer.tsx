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
      if (groupPrice?.__option != "Some" || !groupPrice?.value) return;

      const tx = await transactionBuilder()
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
        )
        .sendAndConfirm(umi);

      // toast.info("Minting Tx sent");

      // let buildTx = await tx.buildWithLatestBlockhash(umi);
      // console.log("Build Tx", buildTx);
      // buildTx = await umi.identity.signTransaction(buildTx);
      // const signature = await umi.rpc.sendTransaction(buildTx, {
      //   commitment: "finalized",
      //   skipPreflight: true,
      // });
      // console.log(bs58.encode(signature));

      // const confirmTx = await umi.rpc.confirmTransaction(signature, {
      //   strategy: {
      //     type: "blockhash",
      //     ...(await umi.rpc.getLatestBlockhash()),
      //   },
      // });

      // console.log("confirmg tx");
      // console.log("confirmTx", confirmTx);
      if (tx) {
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
      <div className={styles.ContentContainer}>
        <div className={styles.ContentLeft}>
          <img src="/logoGif.gif" alt="" />
          <span>100:40:30</span>
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
        <div className={styles.ContentRight}>
          <div className={styles.DescDiv}>
            <span>OWN THE STORY. SHAPE THE FUTURE. JOIN THE SHARKYGANG.</span>

            <div className={styles.ButtonsContainer}>
              <button>Origin Story</button>
              <button>Roadmap</button>
            </div>
            <div className={styles.IconsContainer}>
              <a href="/">
                <FaTelegram />
              </a>
              <a href="/">
                <FaInstagram />
              </a>

              <a href="/">
                <FaXTwitter />
              </a>
              <a href="/">
                <FaDiscord />
              </a>
              <a href="/">
                <FaGithub />
              </a>
            </div>
          </div>
          <div className={styles.MintCountBox}>
            <span>Total Mint : </span>
            <div className={styles.Counttext}>
              <div
                style={{
                  background: "white",
                  margin: "10px 1em",
                  height: "30px",
                  borderRadius: "10px",
                  padding: "3px",
                  width: "90%",
                }}
              >
                <div
                  style={{
                    width: `${
                      (Number(CandyMachine?.itemsRedeemed) /
                        Number(CandyMachine?.itemsLoaded)) *
                      100
                    }%`,
                    minWidth: "2%",
                    height: "23px",
                    borderRadius: "10px",

                    background: "black",
                  }}
                />
              </div>
              <div className={styles.MintPercent}>
                {Number(CandyMachine?.itemsRedeemed)}&nbsp;/&nbsp;
                {Number(CandyMachine?.itemsLoaded)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MintContainer;
