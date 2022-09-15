import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useMusicPlayer from "../hooks/usePlayerProvider";
import Marquee from "react-fast-marquee";
import Controller from "./Controller ";
import HeadphonesIcon from "@mui/icons-material/Headphones";
const TrackList = () => {
  const { trackList, currentTrackName, playTrack } = useMusicPlayer();
  const WallPaper = styled("div")({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    overflow: "hidden",
    background: "linear-gradient(rgb(255, 38, 142) 6%, rgb(255, 105, 79) 66%)",
    transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
    "&:before": {
      content: '""',
      width: "140%",
      height: "140%",
      position: "absolute",
      top: "-40%",
      right: "-50%",
      background:
        "radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 66%)",
    },
    "&:after": {
      content: '""',
      width: "140%",
      height: "140%",
      position: "absolute",
      bottom: "-50%",
      left: "-30%",
      background:
        "radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 66%)",
      transform: "rotate(30deg)",
    },
  });
  const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    cursor: "pointer",
    borderRadius: 16,
    width: 343,
    maxWidth: "100%",
    margin: "auto",
    marginBottom: 3,
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(0,0,0,0.6)"
        : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)",
    "&:hover": {
      background: "rgb(250, 84, 120)",
    },
  }));
  const CoverImage = styled("div")({
    width: 100,
    height: 100,
    objectFit: "cover",
    overflow: "hidden",
    flexShrink: 0,
    borderRadius: 8,
    backgroundColor: "rgba(0,0,0,0.08)",
    "& > img": {
      width: "100%",
    },
  });

  return (
    <>
      <Box
        sx={{
          width: "100%",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bolder",
            color: "rgb(255, 50, 156)",
            mb: 3,
            mt: 6,
            textShadow: "-2px 2px #ff0000",
          }}
        >
          Playlist 🌙
        </Typography>
      </Box>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <Box key={index} sx={{ border: "1px solid black", zIndex: 3 }}>
          <Widget>
            <Box
              sx={{ display: "flex", alignItems: "center" }}
              onClick={() => playTrack(index)}
            >
              <CoverImage>
                <img src={track.src} alt="" />
              </CoverImage>
              <Box sx={{ ml: 2, minWidth: 0 }}>
                <Typography noWrap component={"div"} variant={"body1"}>
                  {currentTrackName !== track.name ? (
                    <span style={{ fontWeight: "bolder" }}>{track.name}</span>
                  ) : (
                    <Marquee
                      speed="55"
                      direction="right"
                      gradientColor="[252, 221, 232]"
                      style={{
                        color: "rgb(255, 38, 142)",
                        fontWeight: "bolder",
                      }}
                    >
                      <HeadphonesIcon fontSize="small" />
                      {""}
                      {track.name}
                    </Marquee>
                  )}
                </Typography>
                <Typography noWrap letterSpacing={-0.25}>
                  {track.author}
                </Typography>
              </Box>
            </Box>
          </Widget>
          <WallPaper />
        </Box>
      ))}
      <Widget
        style={{
          cursor: "default",
          background: "rgb(255, 255, 255,0.4)",
        }}
      >
        <Controller />
      </Widget>
    </>
  );
};

export default TrackList;
