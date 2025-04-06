.MintDiv {
  padding: 7rem 1em 2em;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.MintDiv span {
  text-align: center;
  font-size: 6em;
}

.ContentContainer {
  margin: 1em;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.ContentLeft {
  max-width: 500px;
  border: 4px solid rgb(77, 77, 77);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 1.5em;
  background-color: rgba(0, 0, 0, 0.664);
  border-radius: 1em;
}

.ContentLeft img {
  width: 400px;
  max-width: 100%;
  border-radius: 1em;
  padding: 10px;
  box-shadow: 0 0 15px white;
}

.ContentLeft span {
  font-size: 2em;
  color: white;
}

.ContentLeft button {
  color: black;
  background-color: var(--c4);
  font-size: 2em;
  padding: 10px 2em;
  border-radius: 10px;
  border: 4px solid white;
}

.ContentRight {
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
}

.DescDiv {
  width: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: rgba(0, 0, 0, 0.664);
  border: 4px solid rgb(88, 88, 88);
  padding: 2em 1em;
  border-radius: 1em;
  color: var(--c5);
}

.DescDiv span {
  font-size: 2em;
  font-weight: 700;
  text-align: center;
}

.DescDiv span:nth-child(1) {
  text-shadow: 2px 2px 20px var(--c5);
}

.IconsContainer {
  display: flex;
  justify-content: space-around;
  padding: 1em;
  gap: 1.5em;
  border: 3px solid white;
  border-radius: 1em;
  background-color: rgba(0, 0, 0, 0.514);
}

.IconsContainer a {
  font-size: 2em;
  display: flex;
}

.MintCountBox {
  width: 100%;
  position: relative;
  height: 60px;
  margin-bottom: 1rem;
  overflow: hidden;
  border-radius: 2em;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.MintProgressFill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  border-radius: 2em;
  z-index: 1;
  background-color: #0af;
  animation: growBar 1.5s ease-out forwards;
  width: var(--progress-width);
}

.MintProgressFill.low {
  background-color: #0af;
}
.MintProgressFill.medium {
  background-color: orange;
}
.MintProgressFill.high {
  background-color: red;
}

@keyframes growBar {
  from {
    width: 0;
  }
  to {
    width: var(--progress-width);
  }
}

.MintPercent {
  font-size: 2em;
  font-weight: 700;
  position: relative;
  z-index: 2;
  color: var(--c5);
  text-shadow: 0 0 10px var(--c5);
}

.ContentRight button {
  display: flex;
  width: fit-content;
  font-size: 3em;
  font-family: var(--my-font);
  padding: 0.1em 1em;
  align-self: center;
  border-radius: 2em;
  box-shadow: 0 0 20px rgb(110, 109, 109);
  border: none;
  color: black;
  cursor: pointer;
  background: linear-gradient(
    108deg,
    rgba(92, 225, 230, 1) 0%,
    rgba(140, 82, 255, 0.5494572829131652) 100%
  );
}

@media screen and (max-width: 978px) {
  .ContentContainer {
    flex-direction: column;
    align-items: center;
  }

  .ContentRight {
    width: 100%;
    flex-direction: column-reverse;
  }

  .MintDiv span {
    font-size: 3em;
  }
}

@media screen and (max-width: 600px) {
  .MintDiv {
    padding: 6rem 0 2em;
  }
}
