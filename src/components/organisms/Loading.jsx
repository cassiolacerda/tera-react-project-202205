import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
// https://mui.com/pt/material-ui/react-progress/

export default function Loading() {
  return (
    <div className="center">
      <CircularProgress color="inherit" />
    </div>
  );
}
