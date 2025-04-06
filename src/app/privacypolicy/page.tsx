import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="textContainer">
      <h1>Privacy Policy for SharkyBoy NFTs</h1>
      <p>Effective Date: 03/01/2025</p>

      <p>
        At SharkyBoy NFTs, we are committed to protecting your privacy and
        ensuring the safety of your personal information. This Privacy Policy
        outlines how we collect, use, and protect the data you share when
        interacting with our website and NFT services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We only collect limited user data necessary to facilitate interactions
        on the blockchain. This includes:
      </p>
      <ul>
        <li>
          <strong>Public Wallet Address:</strong> When you connect your wallet
          (e.g., Phantom, Solflare, Backpack), we store your public wallet
          address to identify ownership of NFTs and facilitate transactions.
        </li>
        <li>
          <strong>Transaction Data:</strong> We may collect transaction data
          related to NFT minting and purchases for tracking mint counts and
          ownership records.
        </li>
        <li>
          <strong>Usage Data:</strong> Non-identifiable site analytics such as
          browser type, device, and time spent on the site, collected via tools
          like Google Analytics.
        </li>
      </ul>
      <p>
        <em>
          Note: We do <strong>not</strong> collect personal information such as
          your name, email, or payment card details.
        </em>
      </p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To facilitate the minting and purchase of SharkyBoy NFTs</li>
        <li>To display your owned NFTs</li>
        <li>To track minting progress and supply</li>
        <li>To monitor and improve site functionality</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>
        We do <strong>not</strong> sell, trade, or rent your data to third
        parties. However, we may share anonymized or aggregated data with
        service providers for analytics and performance optimization.
      </p>
      <p>
        Blockchain transactions are public and permanently recorded. Your wallet
        address and transaction history may be visible to others via the Solana
        blockchain.
      </p>

      <h2>4. Data Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect
        user data. Wallet integrations are handled via secure and vetted
        providers (e.g., Phantom). All NFT transactions occur directly on the
        Solana blockchain.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        Our website may include links to third-party platforms (e.g., Magic
        Eden, Solscan). We are not responsible for the privacy practices of
        these services.
      </p>

      <h2>6. Your Rights</h2>
      <p>
        You have the right to disconnect your wallet at any time. You may also
        request that we remove any on-site data related to your session history
        by contacting us at: 📧{" "}
        <a href="mailto:dev@sharkyboy.com">dev@sharkyboy.com</a>
      </p>

      <h2>7. Children's Privacy</h2>
      <p>
        SharkyBoy NFTs is not intended for use by individuals under the age of
        18. We do not knowingly collect data from minors.
      </p>

      <h2>8. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The latest version
        will always be posted on this page with the effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        For any questions about this Privacy Policy or your data rights, contact
        us at: 📧
        <a href="mailto:dev@sharkyboy.com">dev@sharkyboy.com</a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
