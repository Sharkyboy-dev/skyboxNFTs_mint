import type { Metadata } from "next";
import { Poppins, Rock_Salt, Tektur } from "next/font/google";
import "./globals.css";
import AppWalletProvider from "@/utils/AppWalletProvider";
import { SolanaBasicContextProvider } from "@/utils/solanaBasicContext";
import "react-toastify/dist/ReactToastify.css";
import { Slide, ToastContainer } from "react-toastify";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "./zing.otf", // correct path
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--my-font", // define the variable if you plan to use it
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
      <body className={myFont.variable}>
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
