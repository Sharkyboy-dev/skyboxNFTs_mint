"use client";

import React, { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl, Connection } from "@solana/web3.js";
import { publicKey } from "@metaplex-foundation/umi";
import { UmiProvider } from "./UmiProvider";
require("@solana/wallet-adapter-react-ui/styles.css");

// imports here

export let RPC_URL =
  "https://mainnet.helius-rpc.com/?api-key=50ec02b7-754c-4936-b9ee-d698c238951d";

export let CONNRPC =
  "https://solana-Mainnet.g.alchemy.com/v2/aosSEDNOSBO0fsNcTISNYfj9irU59Gzz";
export const connection = new Connection(CONNRPC);
export const dummyPublicKey = publicKey("11111111111111111111111111111111");

export default function AppWalletProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = RPC_URL;
  const wallets = useMemo(() => [], [network]);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <UmiProvider endpoint={endpoint}>
          <WalletModalProvider>{children}</WalletModalProvider>
        </UmiProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
