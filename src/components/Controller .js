import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
const Controller = () => {
  const { playPreviousTrack, playNextTrack, togglePlay, isPlaying } =
    useMusicPlayer();
  const theme = useTheme();
  const mainIconColor = theme.palette.mode === "dark" ? "#fff" : "#000";
  const style = {
    backdropFilter: "blur(0px)",
    "&:hover": {
      background: "rgb(250, 84, 120)",
    },
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 0,
        }}
      >
        <IconButton
          aria-label="previous song"
          sx={style}
          onClick={() => playPreviousTrack()}
        >
          <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
          aria-label={!isPlaying ? "play" : "pause"}
          onClick={() => togglePlay()}
          sx={style}
        >
          {!isPlaying ? (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={mainIconColor}
            />
          ) : (
            <PauseRounded sx={{ fontSize: "3rem" }} htmlColor={mainIconColor} />
          )}
        </IconButton>
        <IconButton
          aria-label="next song"
          sx={style}
          onClick={() => playNextTrack()}
        >
          <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
      </Box>
    </>
  );
};

export default Controller;
