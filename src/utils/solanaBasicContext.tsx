"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useUmi } from "./useUmi";
import { connection, dummyPublicKey } from "./AppWalletProvider";
import {
  CandyGuard,
  CandyMachine,
  fetchCandyGuard,
  fetchCandyMachine,
} from "@metaplex-foundation/mpl-candy-machine";
import { publicKey } from "@metaplex-foundation/umi";
import { set } from "@metaplex-foundation/umi/serializers";
import { candyMachine } from "./constant";

type SolanaTimeContextType = {
  solanaTime: number;
};

const SolanaTimeContext = createContext<SolanaTimeContextType>({
  solanaTime: 0,
});

const candyMachineContext = createContext<{
  CandyMachine: CandyMachine | null;
  CandyGuard: CandyGuard | null;
  isCMLoading: boolean;
  setIsCMLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}>({ CandyMachine: null, CandyGuard: null, isCMLoading: true });

export const useSolanaTime = () => useContext(SolanaTimeContext).solanaTime;

export const useCandyMachine = () => useContext(candyMachineContext);

export const SolanaBasicContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [solanaTime, setSolanaTime] = useState<number>(0);
  const umi = useUmi();
  const [CMDetails, setCMDetails] = useState<CandyMachine>();
  const [CGDetails, setCGDetails] = useState<CandyGuard>();

  const [isCMLoading, setIsCMLoading] = useState<boolean>(true);

  const fetchSolanaTime = async () => {
    const slot = await connection.getSlot();
    let time = await connection.getBlockTime(slot);
    if (!time) time = 0;
    setSolanaTime(time);
  };

  const fetchCandyMachineDetails = async () => {
    if (candyMachine) {
      let cmid = candyMachine;
      try {
        const CM = await fetchCandyMachine(umi, publicKey(cmid), {
          commitment: "confirmed",
        });
        const CMGuard = await fetchCandyGuard(umi, publicKey(CM.mintAuthority));
        console.log("Candy Machine Details", CM);
        console.log("Candy Guard Details", CMGuard);

        setCMDetails(CM);
        setCGDetails(CMGuard);
      } catch (error) {
        console.log("Error fetching Candy Machine Details", error);
      } finally {
        setIsCMLoading(false);
      }
    }
  };

  useEffect(() => {
    if (!isCMLoading) return;

    fetchSolanaTime();

    fetchCandyMachineDetails();
  }, [isCMLoading]);

  return (
    <SolanaTimeContext.Provider value={{ solanaTime }}>
      <candyMachineContext.Provider
        value={{
          CandyMachine: CMDetails || null,
          CandyGuard: CGDetails || null,
          isCMLoading: isCMLoading,
          setIsCMLoading: setIsCMLoading,
        }}
      >
        {children}
      </candyMachineContext.Provider>
    </SolanaTimeContext.Provider>
  );
};
