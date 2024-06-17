import { CircularProgress } from "@mui/material";

const Loading = () => (
  <CircularProgress
    thickness={2}
    size="12rem"
    sx={{
      color: "black",
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

export default Loading;
