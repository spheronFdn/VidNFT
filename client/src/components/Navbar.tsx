import { FC } from "react";
import MintNft from "./MintNft";

const Navbar: FC = () => {
  return (
    <main className="flex justify-between items-center mt-4 mb-10">
      <h1 className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-600 py-4 ml-6 cursor-default">
        VidNFT
      </h1>
      <MintNft />
    </main>
  );
};

export default Navbar;
