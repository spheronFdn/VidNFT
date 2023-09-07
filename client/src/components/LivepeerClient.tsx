import { FC } from "react";
import {
  LivepeerConfig,
  ThemeConfig,
  createReactClient,
  studioProvider,
} from "@livepeer/react";
import { ILivepeer, Livepeer } from "./Livepeer";

const client = createReactClient({
  provider: studioProvider({ apiKey: "yourStudioApiKey" }),
});

const livepeerTheme: ThemeConfig = {
  colors: {
    accent: "rgb(0, 145, 255)",
    containerBorderColor: "rgba(0, 145, 255, 0.9)",
  },
  fonts: {
    display: "Inter",
  },
};

const LivepeerClient: FC<ILivepeer> = ({ cid }) => {
  return (
    <LivepeerConfig client={client} theme={livepeerTheme}>
      <Livepeer cid={cid} />
    </LivepeerConfig>
  );
};

export default LivepeerClient;
