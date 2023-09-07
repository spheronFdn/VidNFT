import { FC, useEffect, useState } from "react";
import { Player } from "@livepeer/react";
import Logo from "../assets/logo.png";

export interface ILivepeer {
  cid: string;
}

const PosterImage = () => {
  return (
    <img
      src={Logo}
      alt="Logo"
      placeholder="blur"
      style={{ backgroundPosition: "center", backgroundSize: "cover" }}
    />
  );
};

const Livepeer: FC<ILivepeer> = ({ cid }) => {
  const [playbackId, setPlaybackId] = useState("");

  console.log(cid);

  useEffect(() => {
    fetch(`http://provider.palmito.duckdns.org:30032/api/v0/ls?arg=${cid}`, {
      method: "POST",
      body: JSON.stringify({
        arg: cid,
      }),
      headers: {
        "Content-type": "application/json;",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlaybackId(data.Objects[0].Links[0].Hash));
  }, [cid]);

  return (
    <>
      {playbackId && (
        <Player
          title="Waterfalls"
          playbackId={playbackId}
          loop
          autoPlay={false}
          showTitle={false}
          muted
          poster={<PosterImage />}
        />
      )}
    </>
  );
};

export { Livepeer };
