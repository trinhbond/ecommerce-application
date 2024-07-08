import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <CircularProgress
      thickness={2}
      size="12rem"
      sx={{
        color: "#000000",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifySelf: "center",
        alignSelf: "center",
        display: "grid",
        position: "absolute",
      }}
    />
  );
}
