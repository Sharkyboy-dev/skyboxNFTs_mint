import type { Metadata } from "next";
import { Poppins, Rock_Salt, Tektur } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "@/utils/AppWalletProvider";
import { SolanaBasicContextProvider } from "@/utils/solanaBasicContext";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";

const poppins = Poppins({
  variable: "--font-popins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const rockSalt = Rock_Salt({
  variable: "--font-rockSalt",
  subsets: ["latin"],
  weight: ["400"],
});
const tektur = Tektur({
  variable: "--font-tektur",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SharkyBoy Genesis Collection Mint",
  description: "SharkyBoy Genesis Collection Mint",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${rockSalt.variable} ${tektur.variable}`}
      >
        <AppWalletProvider>
          <SolanaBasicContextProvider>
            <ToastContainer
              autoClose={3000}
              theme="dark"
              position="top-right"
              transition={Slide}
              newestOnTop
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
              hideProgressBar={false}
              rtl={false}
            />
            {children}
          </SolanaBasicContextProvider>
        </AppWalletProvider>
      </body>
    </html>
  );
}
