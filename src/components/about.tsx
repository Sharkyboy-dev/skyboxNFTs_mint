import React from "react";
import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <span>About us</span>
      <div className={styles.description}>
        <p>
          SHARKYBOY IS MORE THAN JUST AN NFT COLLECTION-IT'S A STORY-DRIVEN
          COMMUNITY BUILT AROUND A RICH, EVOLVING NARRATIVE AND EXCLUSIVE
          HOLDER-DRIVEN EXPERIENCES. INSPIRED BY THE LOST FIN CLAN, THE GENESIS
          COLLECTION INTRODUCES 1,000 UNIQUE SHARKYBOY NFTS, EACH REPRESENTING A
          WARRIOR IN THE DEEP-SEA UNIVERSE WHERE HONOR, POWER, AND LEGACY SHAPE
          THEIR FATE.
        </p>
        <p>
          AS A GENESIS HOLDER, YOU'RE NOT JUST COLLECTING AN NFT-YOU'RE BECOMING
          PART OF THE SHARKYBOY UNIVERSE. HOLDERS GET EXCLUSIVE VOTING RIGHTS ON
          FUTURE CHARACTER RELEASES, COMIC BOOK STORYLINES, MERCH DESIGNS, AND
          MORE, ENSURING THAT THE PROJECT IS BUILT FOR THE COMMUNITY, BY THE
          COMMUNITY.
        </p>
        <ul>
          <li>
            EXCLUSIVE MEMBER PERKS - EARLY ACCESS TO FUTURE DROPS, EXCLUSIVE
            COMMUNITY EVENTS, AND NFT REWARDS
          </li>
          <li>
            INTERACTIVE STORYTELLING - HELP SHAPE THE SHARKYBOY SAGA WITH EACH
            NEW RELEASE
          </li>
          <li>
            GROWING WEB3 ECOSYSTEM - BUILT WITH TRUE COMMUNITY ENGAGEMENT AT ITS
            CORE
          </li>
        </ul>
      </div>
      <div className={styles.description}>
        <p>
          JOIN US AS WE EXPAND THE SHARKYBOY UNIVERSE, FROM NFTS TO COMICS,
          COLLECTIBLES, AND BEYOND. THIS IS JUST THE BEGINNING-WILL YOU BE PART
          OF THE LEGEND?
        </p>
        <p> JOIN THE MOVEMENT. OWN A SHARKYBOY. SHAPE THE STORY</p>
      </div>
    </div>
  );
};

export default About;
