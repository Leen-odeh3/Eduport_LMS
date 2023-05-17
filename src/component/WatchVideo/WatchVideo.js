import * as React from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" sx={{ height: 100 }}>
      <IconButton
        sx={{
          width: 50,
          height: 50,
          color: "#066ac9",
          backgroundColor: "#cfe2f3",
          "&:hover": {
            color: "#d6293e",
            backgroundColor: "rgba(214, 41, 62, 0.1)",
          },
        }}
      >
        <PlayCircleIcon />
      </IconButton>
      <Button
        sx={{ color: "black", fontFamily: "sans-serif", fontSize: "large" }}
        href="https://www.youtube.com/watch?v=Q5oNh7a3B9I"
        target="_blank"
      >
        Watch Video
      </Button>
    </Stack>
  );
}
