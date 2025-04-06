import React from "react";

const Disclaimer = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        padding: "2rem",
        fontFamily: "Orbitron, sans-serif",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <div
        style={{
          border: "2px solid #0ff",
          borderRadius: "1em",
          padding: "2rem",
          maxWidth: "700px",
          width: "100%",
          boxShadow: "0 0 15px #0ff",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <h1 style={{ fontSize: "2.5em", marginBottom: "1rem", color: "#0ff" }}>
          DISCLAIMER
        </h1>
        <p style={{ marginBottom: "1.5rem", lineHeight: "1.7em" }}>
          SharkyBoy NFTs are digital collectibles created for entertainment and
          community engagement purposes. By connecting your wallet and
          participating in the minting or purchase of SharkyBoy NFTs, you
          acknowledge and accept all associated risks, including but not limited
          to fluctuations in market value, gas/network fees, and the use of
          third-party services such as wallet providers and marketplaces.
        </p>
        <p style={{ marginBottom: "1.5rem", lineHeight: "1.7em" }}>
          We do not offer investment advice or guarantee any future value or
          utility of the NFTs. All purchases are final and non-refundable. Please
          ensure you are using a secure wallet and double-check all transaction
          details before confirming.
        </p>
        <p style={{ lineHeight: "1.7em" }}>
          Your wallet information is never stored on our servers, and we do not
          have access to your private keys or funds. By interacting with our site,
          you agree to our Terms of Use and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
