import { Chip } from "@mui/material";
import React from "react";

const Badge = ({
  title,
  color,
  textColor,
}: {
  title: string;
  color: string;
  textColor: string;
}) => {
  return (
    <Chip
      label={title}
      sx={{
        borderRadius: "10px",
        backgroundColor: `${color}`,
        backgroundBlendMode: "multiply",
        color: `${textColor}`,
      }}
    />
  );
};

export default Badge;
