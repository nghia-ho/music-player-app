import React, { useState } from "react";
import track1 from "../mp3/track1.mp3";
import track2 from "../mp3/track2.mp3";
import track3 from "../mp3/track3.mp3";

const MusicPlayerContext = React.createContext();
const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "cookies",
      file: track1,
      author: "new jeans",
      src: "https://upload.wikimedia.org/wikipedia/vi/3/3d/New_Jeans_%28EP%29.jpg",
    },
    {
      name: "heaven's On Fire - Jazz",
      file: track2,
      author: "amaksi",
      src: "https://ss-images.saostar.vn/wp700/pc/1620450704990/saostar-0lpwsn8b02ifajy1.jpeg",
    },
    {
      name: "Beth - Jazz",
      file: track3,
      author: "QubeSounds",
      src: "https://avatar-ex-swe.nixcdn.com/playlist/2019/06/19/b/7/5/2/1560936446754_500.jpg",
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};
const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
