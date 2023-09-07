import { FC } from "react";
import { decode as base64_decode } from "base-64";
import LivepeerClient from "./LivepeerClient";

interface INFTCard {
  nft: any;
}

const NFTCard: FC<INFTCard> = ({ nft }) => {
  const videoCID = JSON.parse(base64_decode(nft.metadataURI)).cid;
  const name = JSON.parse(base64_decode(nft.metadataURI)).name;
  const description = JSON.parse(base64_decode(nft.metadataURI)).description;

  return (
    <section
      className="w-full h-full p-4 border border-gray-400 rounded-md relative cursor-pointer"
      style={{
        background: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, #808080 0%, rgba(255, 255, 255, 0.05) 70%)`,
      }}
    >
      {videoCID && <LivepeerClient cid={videoCID} />}
      <div className="flex flex-col mx-4 mt-4">
        <p className="text-white text-2xl font-bold">{name}</p>
        <p className="text-[#c6c2c6] text-base font-bold pt-1">{description}</p>
      </div>
    </section>
  );
};

export default NFTCard;
