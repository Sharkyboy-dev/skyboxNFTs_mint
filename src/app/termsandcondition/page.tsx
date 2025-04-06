import React from "react";

const TermsAndConditions = () => {
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
          maxWidth: "850px",
          width: "100%",
          boxShadow: "0 0 15px #0ff",
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        }}
      >
        <h1 style={{ fontSize: "2.2em", marginBottom: "1rem", color: "#0ff" }}>
          TERMS AND CONDITIONS FOR SHARKYBOY NFTs
        </h1>

        <p><strong>Effective Date:</strong> 03/01/2025</p>
        <p>
          <strong>Website:</strong>{" "}
          <a href="https://sharkyboy.com" style={{ color: "#0ff" }}>
            https://sharkyboy.com
          </a>
        </p>
        <p>
          <strong>Contact:</strong>{" "}
          <a href="mailto:dev@sharkyboy.com" style={{ color: "#0ff" }}>
            dev@sharkyboy.com
          </a>
        </p>

        <p>
          Please read these Terms and Conditions (“Terms”) carefully before using the SharkyBoy NFT website and services.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using this website or connecting your digital wallet, you acknowledge that you are at least 18 years old and agree to be legally bound by these Terms.
        </p>

        <h2>2. NFTs and Ownership</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>NFTs Defined:</strong> The SharkyBoy NFTs are digital collectibles on the Solana blockchain.</li>
          <li><strong>Ownership:</strong> You own the NFT but not the underlying IP unless otherwise stated.</li>
          <li><strong>Commercial Rights:</strong> Commercial use requires prior written approval.</li>
        </ul>

        <h2>3. Wallet and Blockchain Usage</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>We do <strong>not</strong> store private keys.</li>
          <li>You're responsible for your wallet security.</li>
          <li>All transactions are final on Solana.</li>
        </ul>

        <h2>4. Fees and Payments</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>All purchases are made in $SOL.</li>
          <li>Users pay for gas/transaction fees.</li>
          <li>Prices are fixed and non-refundable.</li>
        </ul>

        <h2>5. Risks</h2>
        <p>By participating, you accept the following risks:</p>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li><strong>Volatility:</strong> NFT values may fluctuate.</li>
          <li><strong>Loss:</strong> You may lose digital assets.</li>
          <li><strong>Regulatory Uncertainty:</strong> Laws may change.</li>
        </ul>

        <h2>6. No Financial Advice</h2>
        <p>
          Nothing here is financial or legal advice. Always DYOR.
        </p>

        <h2>7. Site Availability</h2>
        <p>
          We aim for 100% uptime, but cannot guarantee uninterrupted service.
        </p>

        <h2>8. Intellectual Property</h2>
        <p>
          All content on the site, including logos, artwork, text, and branding, is the intellectual property of SharkyBoy and may not be reused without permission.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may block users who exploit or violate these Terms.
        </p>

        <h2>10. Updates to Terms</h2>
        <p>
          We may revise these Terms. The latest version will always be posted here.
        </p>

        <h2>11. Contact</h2>
        <p>
          If you have any questions or concerns about these Terms, please contact us: 📧{" "}
          <a href="mailto:dev@sharkyboy.com" style={{ color: "#0ff" }}>
            dev@sharkyboy.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
