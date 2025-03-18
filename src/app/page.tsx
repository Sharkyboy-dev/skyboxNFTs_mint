"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/navbar";
import MintContainer from "@/components/mintContainer";
import Footer from "@/components/footer";
import dynamic from "next/dynamic";

export const candyMachine = "Yth4dX6oi8bzXE6L5MLTNheiVXkPffAT66F3ZqmcC5o";
export const collectionId = "8kShQg3jLrKbE8hn6V11SGq9D895YW4hgxcC2eQDcH1g";
// export const candyGuard = "3xQBHWVcMo9i2mcekSZmP3T8wtjTi3srS6j44hANongo";

export const WalletMultiButton = dynamic(
  () =>
    import("@solana/wallet-adapter-react-ui").then(
      (mod) => mod.WalletMultiButton
    ),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <div className={styles.Maincontainer}>
      <Navbar />
      <MintContainer />
      <Footer />
    </div>
  );
}
